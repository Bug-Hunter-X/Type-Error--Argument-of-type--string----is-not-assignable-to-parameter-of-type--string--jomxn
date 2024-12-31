# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript that occurs when passing an array to a function that expects a string.

## Bug

The `greeter` function expects a string argument, but the code passes an array of strings.  This results in a type error.

## Solution

The solution involves modifying the code to handle the array appropriately, either by iterating over the array or by using a different function signature.