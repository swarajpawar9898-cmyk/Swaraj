<!DOCTYPE html>
<html>
<head>
<title>JavaScript Concepts Demo</title>

<script type="text/javascript">

// Object creation
var student = new Object();
student.name = "Swaraj";
student.course = "Data Science";

// Display object properties
function showObject(){
    document.getElementById("obj").innerHTML =
    "Student Name: " + student.name + "<br>" +
    "Course: " + student.course;
}