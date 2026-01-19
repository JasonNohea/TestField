<!DOCTYPE html>
<html>

<head>
    <title>Konversi Teks Angka Indonesia</title>
</head>

<body>
    <h2>Masukkan angka:</h2>
    <form method="post">
        <input type="text" name="input_text" placeholder="Contoh: seratus dua puluh tiga." size="60">
        <button type="submit">Konversi</button>
    </form>

    <?php
    function indonesianTextToNumber($text)
    {
        $text = strtolower(trim($text, "."));
        $words = explode(" ", $text);

        $units = [
            "nol" => 0,
            "satu" => 1,
            "dua" => 2,
            "tiga" => 3,
            "empat" => 4,
            "lima" => 5,
            "enam" => 6,
            "tujuh" => 7,
            "delapan" => 8,
            "sembilan" => 9
        ];

        $special = [
            "seratus" => 100,
            "seribu" => 1000,
            "sebelas" => 11,
            "sepuluh" => 10
        ];

        $multipliers = [
            "ratus" => 100,
            "puluh" => 10,
            "belas" => 10,
            "ribu" => 1000,
            "juta" => 1000000
        ];

        $total = 0;
        $group = 0;
        $i = 0;

        while ($i < count($words)) {
            $word = $words[$i];

            if (isset($special[$word])) {
                $group += $special[$word];
            } elseif (isset($units[$word])) {
                if (isset($words[$i + 1])) {
                    $next = $words[$i + 1];
                    if ($next == "belas") {
                        $group += 10 + $units[$word];
                        $i++;
                    } elseif ($next == "puluh") {
                        $group += $units[$word] * 10;
                        $i++;
                    } elseif ($next == "ratus") {
                        $group += $units[$word] * 100;
                        $i++;
                    } else {
                        $group += $units[$word];
                    }
                } else {
                    $group += $units[$word];
                }
            } elseif (isset($multipliers[$word])) {
                if ($word == "belas") {
                    $group += 10;
                } elseif ($word == "puluh" || $word == "ratus") {
                    if ($group == 0) $group = 1;
                    $group *= $multipliers[$word];
                } elseif ($word == "ribu" || $word == "juta") {
                    if ($group == 0) $group = 1;
                    $total += $group * $multipliers[$word];
                    $group = 0;
                }
            }

            $i++;
        }

        $total += $group;
        return $total;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["input_text"])) {
        $input = $_POST["input_text"];
        $output = indonesianTextToNumber($input);
        echo "<h3>Hasil konversi: $output</h3>";
    }
    ?>
</body>

</html>