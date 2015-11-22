# Transform
### Usage
    Transform 
### Description
This command Replaces the elements of the current transformation matrix with the specified matrix elements.
"A shortcut for applying the translate, rotate, and scale commands in a single command; only use this if you understand matrix algebra (finite math)."
"Take[s] a 4 x 4 transformation matrix as an argument, e.g., Transform, require[s] the matrix to be specified by a sequence of sixteen real numbers (separated by spaces) representing its elements. The Transform and TransformJoint scripting keywords expect the matrix elements to be specified in row-major order, i.e., the first four elements specify the first row of the matrix, and so on. " from Eeps site [1]
For more information on how the transform command works see Andras webpage [2]
### Arguments
the sixteen elements of the matrix, separated by spaces 
### Examples
    Transform 1. 0. 0. 0. 0. 1. 0. 0. 0. 0. 1. 0. 0. 0. 1. 1.
    transform scale x rotate # rotate # 0 rotate # scale y rotate # 0 rotate # rotate # scale z 0 translate x translate y translate z 1

