### Usage
   Diffuse value

### Description
This command sets the diffuse component of the current surface lighting properties. The diffuse component specifies how much the world's directional light source "shines" on polygons. It also specifies how much individual light sources placed within the world shine on the polygons. A light source shines more brightly on polygons facing the light source. It does not shine at all on polygons that face away from the light source.

### Arguments
*value* is in the range 0.0 to 1.0

### Examples

    Diffuse .5
This will create a diffuse value of half of the direct light.

    Diffuse 0
This will create a black object if Ambient is also 0.

See the [Surface](Surface.md) command for a more efficient way to specify this.
