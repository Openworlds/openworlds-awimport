# AddTextureMode

The AddTextureMode command is an RWX Command that adds the specified mode to the set of texture modes of the current clump.

### Usage

    AddTextureMode mode

### Description

This command adds the specified mode to the set of texture modes of the current clump. The mode can be either lit, foreshorten, or filter, however Activeworlds v3.0+ only supports the lit texture mode.
Texture mode lit is on by default. It causes textures to be lit by any light sources in the world and to be affected by the surface properties of the current material. If texture lighting is off, textured surfaces are lit only by the current ambient light source in the world.

### Arguments

The possible modes are *lit*, *foreshorten*, or *filter*.

Since ActiveWorlds 3.0+, only *lit* is supported.

### Example

    AddTextureMode lit # This is no longer needed as the lit option is default.
