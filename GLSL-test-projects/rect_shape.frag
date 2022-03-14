// this is for GL embedded systems | video games, online stuff etc
#ifdef GL_ES
precision mediump float;
#endif


// uniform passes data to vertex shader to fragment shader
// sort of bridging them together
uniform vec2 u_resolution;

float rectShape(vec2 position, vec2 scale)
{
    // this regulates the scale
    // more realistc within the canvas
    scale = vec2(0.5) - scale * 0.5;

    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0-position.x), step(scale.y, 1.0-position.y));
    return shaper.x * shaper.y;
}

void main()
{
    // cordinate system of the fragment shader
    // .xy bcz we are using only vector here
    // gl_FragCoord has x,y,z etc
    vec2 position = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0);

    float testRectangle = rectShape(position, vec2(0.6, 0.3));
    color = vec3(testRectangle);

    // output for fragment shader   
    gl_FragColor = vec4(color, 1.0);
}