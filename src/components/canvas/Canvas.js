import React, { Component } from 'react'
class Canvas extends Component{

    componentDidMount()
    {

        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    render(){
        return(
            <>
            <canvas></canvas>
            </>
        )
    }
}

export default Canvas;