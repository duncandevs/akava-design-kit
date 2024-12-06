import * as React from "react";
import Text from "../Text";
import { cn } from "../../utils";
import './Card.css';

export type CardProps = {
    imageSrc: string;
    title: string;
    description: string;
    vertical?: boolean;
};

const CardTitle = ({children, ...props}) => <Text variant="s2" {...props} children={children} />;

const CardDescription = ({children, ...props}) => <Text variant="b3" {...props} children={children} />;

const CardContent = ({ ...props }) => <div className="card-content" {...props} />;

const CardImage = ({ imageSrc, ...props }:{ imageSrc: string }) => <img className="card-image" src={imageSrc} {...props}></img>;

const Card = ({ vertical, children, ...props } : { vertical?: boolean, children: React.ReactNode}) => <div {...props} id="core-card" className={cn("card", vertical && "vertical")} children={children} />; 

export const CardDemo = ({ title, description, vertical, imageSrc }: CardProps) => (
    <Card vertical={vertical}>
        <CardImage imageSrc={imageSrc}></CardImage>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="card-description">{description}</CardDescription>
        </CardContent>
    </Card>
);