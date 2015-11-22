# Collision

### Usage
   [#!]Collision value

*Note*: [ ] denotes an optional argument.

### Description
This command specifies whether the current clump under construction should be included in collision tests. The mode can either be on or off. The collision mode applies to all child clumps of the current clump as well, unless additional collision commands are specified for the child clumps. 
Note that Collision is an extended RWX command and should be prefaced with "#!" when used in RWX files that are intended to work with software other than Active Worlds v3.0+.
Theoretically, using this command in an object can enable a user to create a separate collision mesh, reducing some calculation in the engine.

### Arguments
*value* is either On or Off

### Example
    Modelbegin
     ClumpBegin
      ClumpBegin
       collision off
       # model1 code goes in here
      ClumpEnd
      ClumpBegin
        collision on 
        # model2 code goes in here
      ClumpEnd
     ClumpEnd
    ModelEnd

Part of the model has collision turned off. Note the nested master clump.
