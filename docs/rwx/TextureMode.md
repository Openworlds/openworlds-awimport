# TextureMode
### Usage
    TextureMode value
*Note*: the TextureMode and TextureModes commands are equivalent and may be used interchangeably.
### Description
This command sets the texture modes of the current clump. The modes can be any combination of lit, foreshorten, or filter. However, beginning with Activeworlds v3.0, the browser only supports the lit texture mode.
Texture mode lit is on by default. It causes textures to be lit by any light sources in the world and to be affected by the surface properties of the current material. If texture lighting is off, textured surfaces are lit only by the current ambient light source in the world.
### Arguments
*value* can be *NULL* or *lit*, other values are ignored by the browser.
You will often find Textmode lit foreshorten in older models. It is safe to remove foreshorten when the object will only be used in Activeworlds.
### Examples
    TextureMode lit # default value
