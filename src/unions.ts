///this is called discriminated unions

interface Circle{
    kind:"circle",
    radius:number,
}

interface Square
{
    kind:"square"
    side:number
}

interface Rectangle
{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square | Rectangle


// function getShape(shape : Shape)
// {
//     if(shape.kind === "circle")
//     {
//         return Math.PI * shape.radius ** 2
//     }
//     return shape.side * shape.side
// }

function getMyArea (shape:Shape) 
{
    switch(shape.kind)
    {
        case("circle"): return Math.PI * shape.radius ** 2 
        case("square"): return shape.side * shape.side
        case("rectangle"): return shape.length * shape.width
        default: const unknownshape:never = shape
        return unknownshape;
    }
}