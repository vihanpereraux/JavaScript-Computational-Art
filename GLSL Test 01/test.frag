// this is for GL embedded systems | video games, online stuff etc
#ifdef GL_ES
precision mediump float;
#endif


// uniform passes data to vertex shader to fragment shader
// sort of bridging them together
uniform vec2 u_resolution;


float circleShape(vec2 position, float radius)
{
    return step(radius, length(position - vec2(0.5)));
}
// output fucntion for fragment or vertex shader
void main()
{
    // cordinate system of the fragment shader
    // .xy bcz we are using only vector here
    // gl_FragCoord has x,y,z etc
    vec2 position = gl_FragCoord.xy /iResolution.xy;
    vec3 color = vec3(0.0);

    float testCircle  = circleShape(position, 0.2);
    color = vec3(testCircle);

    // output for fragment shader   
    gl_FragColor = vec4(color, 0.5);
}
