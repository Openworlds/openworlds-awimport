# Texture

### Usage
    Texture name [mask|bump value]

*Note*: [ ] denotes optional arguments.
*Also note*: the Texture and TextureExt commands are equivalent and may be used interchangeably.

### Description
This command sets the texture of the current material, or clears the texture if NULL is specified. The texture may be masked by an optional mask argument.
Texture names are now assumed to be .jpg when no file extension is given. Other popular formats such as .gif and .png may be used, but their file extensions are required. Supported image formats also include tif, emf, wmf and ico.
Masks are in .bmp format and are typically used with .jpg textures. Bitmap masks are always zipped when stored in the textures folder of the object path(OP). Two different naming conventions for masks have been traditionally used which include a ! or an m as the last character of the filename, however there is no requirement to use either convention.
Bumpmaps can be in any supported image format and are typically used with .jpg textures.
### Arguments
*name* is the name of the texture or NULL to specify no texture.
*mask* is the name of the optional mask.
*value* is the name of the mask or bumpmap texture.
### Examples
```
Texture grasso # uses the grasso.jpg texture
Texture glass.png # uses a png texture
Texture glass mask glass! # uses glass.jpg and glass!.bmp for the mask.
Texture glass bump reflect.png # uses glass.jpg and reflect.png for the bumpmap.
```
