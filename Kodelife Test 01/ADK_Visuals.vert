#version 150

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform vec3 spectrum;

uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;
uniform sampler2D prevFrame;
uniform sampler2D prevPass;

in VertexData
{
    vec4 v_position;
    vec3 v_normal;
    vec2 v_texcoord;
} inData;

out vec4 fragColor;

void main(void)
{
    // Cartesian coordinate starts from upper left
    vec2 uv = 1 * inData.v_texcoord;
    
    float red = 0.5 + 0.5 * sin(time * 0.5 + uv.x * 3.0 + uv.y * 0.0);
    float green = 0.5 + 0.5 * sin(time * 0.5 + uv.x * 0.9 + uv.y * 3.0);
    float blue = 0.5 + 0.5 * sin(time * 0.75 + uv.x * 2.0 + uv.y * 2.0);
    
    fragColor = vec4(
        //red
        red * (1.0 - spectrum.x * 0.8 ),
        
        //green
        green * (spectrum.y * 1 ),
        
        //blue
        blue,
        
        //alpha
        1.0);
}