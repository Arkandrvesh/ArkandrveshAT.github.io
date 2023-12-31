var vertices = [
    // T
    -0.7, 0.0, 0.3,    // titik A 0
    -0.4, 0.0, 0.3,    // titik B 1
    -0.7, 0.0, 0.0,    // titik C 2
    -0.4, 0.0, 0.0,    // titik D 3

    -0.7, 0.7, 0.3,    // titik E 4
    -0.4, 0.7, 0.3,    // titik F 5
    -0.7, 0.7, 0.0,    // titik G 6
    -0.4, 0.7, 0.0,    // titik H 7

    -1.0, 0.7, 0.3,    // 8
    -0.1, 0.7, 0.3,    // 9
    -1.0, 0.7, 0.0,    // 10
    -0.1, 0.7, 0.0,    // 11

    -1.0, 0.5, 0.3,    // 12
    -0.1, 0.5, 0.3,    // 13
    -1.0, 0.5, 0.0,    // 14
    -0.1, 0.5, 0.0,    // 15

    -0.7, 0.5, 0.3,    // 16
    -0.4, 0.5, 0.3,    // 17
    -0.7, 0.5, 0.0,    // 18
    -0.4, 0.5, 0.0,    // 19

    0.0, 0.0, 0.3,    //20
    0.0, 0.0, 0.0,    //21
    0.6, 0.0, 0.3,    //22
    0.6, 0.0, 0.0,    //23

    0.6, 0.2, 0.3,    //24    
    0.6, 0.2, 0.0,    //25
    0.3, 0.2, 0.3,    //26
    0.3, 0.2, 0.0,    //27

    0.0, 0.7, 0.3,    //28
    0.0, 0.7, 0.0,    //29
    0.3, 0.7, 0.3,    //30
    0.3, 0.7, 0.0,    //31
];

var colors = [
    // T
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,

    // A
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,

    // T
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,

    // A Layer Belakang
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
];


var triangles = [
    // T
    0.1, 0.0, 0.5,
    0.5, 0.0, 0.5,
    0.1, 0.0, 0.1,
    0.5, 0.0, 0.1,

    // A
    -1.0, -0.5, 0.0, // A 11
    -0.5, 0.5, 0.0,  // B 12
    -0.5, 0.0, 0.0,  // C 13
    -0.75, -0.5, 0.0, // D 14

    0.0, -0.5, 0.0,  // E 15
    -0.25, -0.5, 0.0, // F 16

    // A 3d
    -1.0, -0.5, -1.0, // A 28
    -0.5, 0.5, -1.0,  // B 29
    -0.5, 0.0, -1.0,  // C 30
    -0.75, -0.5, -1.0, // D 31

    0.0, -0.5, -1.0,  // E 32
    -0.25, -0.5, -1.0, // F 33
];

var indices = [
    // T
    0, 1, 2, 1, 2, 3,
    4, 5, 6, 5, 6, 7,
    0, 1, 4, 1, 4, 5,

    // A
    11, 12, 13, 13, 14, 11,
    12, 15, 16, 16, 13, 12,

    // T
    2, 3, 6, 3, 6, 7,
    0, 2, 4, 2, 4, 6,
    1, 3, 5, 3, 5, 7,
    8, 4, 6, 8, 6, 10,
    5, 9, 7, 9, 7, 11,
    8, 10, 12, 10, 12, 14,
    9, 11, 13, 11, 13, 15,
    16, 18, 12, 18, 12, 14,
    17, 19, 15, 17, 15, 13,
    8, 12, 4, 12, 4, 16,
    10, 14, 6, 14, 6, 18,
    9, 13, 5, 13, 5, 17,
    11, 15, 7, 15, 7, 19,

    // A Layer Belakang
    28, 29, 30, 30, 31, 28,
    29, 32, 33, 33, 30, 29,

    // Join 2 Layer A
    11, 12, 28, 28, 29, 12,
    12, 15, 29, 29, 32, 15,
    15, 16, 32, 32, 33, 16,
    16, 13, 33, 33, 30, 13,
    13, 14, 30, 30, 31, 14,
    14, 11, 31, 31, 28, 11,
];
