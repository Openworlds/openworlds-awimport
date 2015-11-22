# ProtoBegin

### Usage
    ProtoBegin name

### Description
This command declares the beginning of a new prototype. All subsequent vertices and polygons are added to this prototype until a matching ProtoEnd is reached.
A prototype is a collection of vertices, polygons, and materials which can be used repeatedly in the same object, like a macro. They are particularly handy if your object uses the same physical structure more than once (e.g. the legs of a table, the tires of a car, etc.) If you put the common structure in a prototype, you only have to define it once and then instantiate it repeatedly wherever you want to use it. Use the ProtoInstance command to instantiate a prototype.
Prototypes cannot be defined within other ProtoBegin/ProtoEnd blocks or within ClumpBegin/ClumpEnd blocks. 
In cases where the model does not contain identical sections, the best use of this is in separating the texture layers. The advantage is that all surfaces with the same textures are grouped together, allowing easy hand editing to replace the texture name or adding tags, or prelighting.
Accutrans can be setup to generate prototypes according to the texture layer structure.

### Arguments
*name* is the name of the prototype, to be referenced by a subsequent ProtoInstance command.

### Examples
    protobegin model1 # model1 is the name of the prototype

