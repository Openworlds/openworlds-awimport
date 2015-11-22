# Block

The Block command is an RWX Command that creates a "block" of the given dimensions in the current clump.

### Usage

    Block x y z

### Description

This command creates a "block" of the given dimensions in the current clump. The block is transformed by the current transformation matrix and its surface is assigned the current material.

### Arguments
*x* the width of the block in decameters
*y* the height of the block in decameters
*z* the depth of the block in decameters
It is not legal to specify a block dimension of zero. 

### Example
    block 0.1 0.2 0.1

This will produce a block with a height of 2m and a width and depth of 1m centered around the origin. That means half of it will be below ground.

The example below will create a textured box with the above attributes. The texture will be wrapped around the block for a reasonable look, but there is no control over it. Make sure that the block command is after the surface and texture lines, or you will get a black untextured box

    modelbegin 
     clumpbegin
      Surface .7 .8 .15
      texture ground34
      block .1 .2 .1
     clumpend 
    modelend
