# AxisAlignment

The AxisAlignment command is an RWX Command that sets the axis alignment for the current object.

### Usage
   AxisAlignment alignment

### Description

This command sets the axis alignment for the current object. It can be one of none, zorientx, zorienty, and xyz. 
Beginning with Active Worlds 3.0, the browser only distinguishes between axis alignment or no axis alignment. Thus, zorientx and zorienty are considered equivalent (i.e. axis alignment is on), and xyz is not supported. The effect of turning on axis alignment anywhere in the object is that the entire object is always rotated to face the viewer; it becomes what is sometimes called a facer. The trees and plants in AlphaWorld are examples of facers.

### Arguments

*alignment* can be set to *zorientx*, *zorienty* or *none* (the default value).

### Example

    AxisAlignment zorientx
    AxisAlignment zorienty

Both will make the object face the viewer regardless of the angle the model is placed in the world.
