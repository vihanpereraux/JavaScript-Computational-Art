#ifdef GL_ES
precision mediump float;
#endif

// output fucntion for fragment shader
void main()
{
    // output for for fragment shader
    vec3 color = vec3(0.6, 0.4, 0.7);
    gl_FragColor = vec4(color, 1);
}