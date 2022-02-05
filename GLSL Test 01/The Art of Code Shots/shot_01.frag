#ifdef GL_ES
precision mediump float;
#endif

void main()
{
    // pixel coordinate / full res of the viewport 
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    // if we uv input 0.5 
    //this substracts 0.5 & it's -> 0 <> 0.5 
    uv -= 0.5;

            // aspect ratio of the screen
    uv.x *= iResolution.x / iResolution.y;  

    // distance from the origin
    float d = length(uv);

    float radius = 0.3;

    // float c = d;
    float c;

    // checking the radius
    if(d < radius)
    {
        c = smoothstep(radius, radius-0.002, d);
                    // t1, t2, input
                    // ----------------------------------------
                    // t1 - lower threshold | input < t1 = 0
                    // t2 - higher threshold | input > t2 = 1
                    // input - distance from the origin
    }
    else
    {
        c = 0.0;
    }

    // rgb representative
    // vec3 - three times with ',' -> 1.0, 1.0, 1.0
    gl_FragColor = vec4(vec3(c), 1.0);
}