# ClumpBegin

### Usage
    ClumpBegin 

### Description
This command declares the beginning of a new clump. All subsequent vertices and polygons are added to this clump until a matching ClumpEnd is reached.
A clump is a collection of vertices, polygons, and materials. Clumps are the basic building blocks of all objects. All .rwx files should have at least one ClumpBegin/ClumpEnd pair. 
Clumps can be nested (i.e. one ClumpBegin/ClumpEnd pair can be declared inside another). When clumps are nested the object becomes hierarchical, and the inner clump is called a child clump. Since hierarchical objects can take significantly longer to render than non-hierarchical (or "flat") objects, for best performance nested clumps should only be used in RWX files intended for avatars that are to be animated.

### Arguments
This command has no arguments.

### Examples
Example 1

    Modelbegin
      ClumpBegin
       # model code goes in here
      ClumpEnd
     ModelEnd

or

    Modelbegin
     ClumpBegin
      # model 1 code goes in here
     ClumpEnd
     ClumpBegin
      # model 2 code goes in here
     ClumpEnd
    ModelEnd

Example 2

Another variation required for *Collision off*

    Modelbegin
     ClumpBegin
      ClumpBegin
       # model 1 code goes in here
      ClumpEnd
      ClumpBegin
        collision off
        # model2 code goes in here
      ClumpEnd
     ClumpEnd
    ModelEnd

Note the nested master clump.

