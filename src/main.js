import { Application } from "@splinetool/runtime";
// import styled from "style-component";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/6FmwkdXa1TQRPUmr/scene.splinecode");
