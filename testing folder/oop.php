<?php

class Car
{
    public $color;
    public $model;

    public function __construct($color, $model)
    {
        $this->color = $color;
        $this->model = $model;
    }

    public function displayInfo()
    {
        echo "Car Model: " . $this->model . ", Color: " . $this->color;
    }
}

$myCar = new Car("Red", "Toyota");
$myCar->displayInfo();
