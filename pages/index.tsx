import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import {WelcomeImage} from "src/components/screens/welcome";
// https://stackoverflow.com/questions/71713111/mui-installation-doesnt-work-with-react-18
import Typewriter from "typewriter-effect";
import {DarkTypography} from "src/components/theme/mui/dark_typography";
import "src/styles/ecess_index.sass"
import {ecessApiCall} from "src/utils/api";
import {ECESSCommittess} from "./ecess_committees";


export function ECESSHome() {
    const [background, setBackground] = useState(undefined);
    useEffect(() => {
        if (background === undefined) {
            ecessApiCall({
                path: "img",
                parameters: {
                    path: "ecess_homescreen.jpg"
                }
            }).then((response: any) => {
                setBackground(response.image);
            });
        }

    })
    return (
        <div style={{maxWidth: 1080, margin: "0 auto"}}>
            <WelcomeImage
                picture={background}
                center={true}
                >
                <div
                    className={"wiggle ls ease-in-out infinite"}
                    >
                    <Typewriter
                        options={{
                            wrapperClassName: "type_writer",
                            cursorClassName: 'cursor_class',
                            strings: [
                                "<strong style='font-size: 20pt'>Welcome to ECESS</strong>",
                                "<strong style='font-size: 20pt'>ECE Student Society</strong>",
                                "<strong style='font-size: 20pt'>Purdue University</strong>",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100, // SET TO USE A 1 SECOND DELAY
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <DarkTypography variant={"body2"}>
                    The purpose of the Electrical and Computer Engineering Student Society is to provide ECE
                    students with an educational and professional community aimed at preparing students for a
                    rigorous academic program, exploring educational and professional post-baccalaureate options
                    and making the most out of their Purdue Experience.
                </DarkTypography>
            </WelcomeImage>
            <div style={{margin: "0 auto", justifyContent: "center", alignContent: "center", padding: 20, textAlign: "center"}}>
                <Typography
                    >
                    ECESS is constantly looking for new applicants. If you are interested,
                    please fill out the interest form below or scan the QR code provided.
                    Committees are detailed in the Committees page of the Website. Thank you!
                </Typography>
                <Button
                    style={{margin: 5}}
                    variant="contained" href="https://bit.ly/ecessapp" target="_blank" color={"primary"}>
                    {"Apply Here!"}
                </Button>
                <Button
                    style={{margin: 5}}
                    variant={"contained"}
                    href="https://docs.google.com/presentation/d/1_frwIrKieIseq4VxoeykkEfFpsoWLHoyBH_FSUujjQk/edit?usp=sharing" target="_blank" color={"primary"}>
                    {"Callout Slides!"}
                </Button>
                <Button
                    style={{margin: 5}}
                    variant={"contained"}
                    href=" https://youtu.be/lJRxn-N8ODA" target="_blank" color={"primary"}>
                    {"Callout Video!"}
                </Button>
            </div>

            <Typography variant="h5" component="h2" style={{textAlign: "center", margin: 30}}>
                Committees
            </Typography>
            <ECESSCommittess />

        </div>)
}
