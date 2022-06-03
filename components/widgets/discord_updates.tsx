import Typography from "@mui/material/Typography";
import {CardContent, Chip, Divider} from "@mui/material";
import {Col, Container, Row} from "react-grid-system";
import {hashCode, intToRGB} from "src/utils";
import {Author} from "./author";
import React from "react";
import dateformat from "dateformat";
import ECESSTheme from "src/components/theme/mui/theme";

export function Updates(props) {
    const {content} = props;
    if (content === undefined) {
        return (
            <></>
        )
    }
    if (content.length === 0) {
        return (
            <div style={{margin: 10}}>
                <Typography variant="h5" component="h2" style={ECESSTheme.typography}>
                    Updates
                </Typography>
                <Divider light style={{marginTop: 5, marginBottom: 5}}/>
                <Typography variant="body1" style={{margin: '0 auto', padding: 20, textAlign: 'center'}}>
                    No New Updates
                </Typography>
            </div>
        )
    }

    return (
        <div style={{margin: 10}}>
            <Typography variant="h5" component="h2">
                Updates
            </Typography>
            <Divider light style={{marginTop: 5, marginBottom: 5}}/>
            <Container style={{width: "100%"}}>
                <Row>
                    {content.map((item, i) => {
                        let now = new Date(item.date);
                        const date = dateformat(now, 'dddd, mmmm dS, yyyy h:MM TT');
                        return (
                            <Col sm={4} key={i} style={{minWidth: 250}}>
                                <CardContent>
                                    {
                                        item.label ?
                                            <Chip
                                                style={{
                                                    backgroundColor: `#${intToRGB(hashCode(item.label))}`,
                                                    marginBottom: 5
                                                }}
                                                label={item.label}/>: <></>
                                    }
                                    <div style={{margin: "5px 0"}}>
                                        <Author name={item.author} />
                                    </div>
                                    <Typography variant={"body2"}>{date}</Typography>
                                    <Typography variant="h6" component="h2" style={{marginTop: 10}}>
                                        {item.title}
                                    </Typography>
                                    <div style={{color: "#fff"}}>
                                        <div dangerouslySetInnerHTML={{__html: item.content}}/>
                                    </div>
                                </CardContent>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <div style={{display: 'flex', marginLeft: -5, marginRight: -5, flexWrap: 'wrap'}}>
            </div>
        </div>
    )
}