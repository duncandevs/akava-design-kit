import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./Tabs.css";
import { BugIcon, CatIcon, DogIcon, BirdIcon } from "lucide-react";

export const TabsRoot = ({...props}) => <Tabs.Root className="TabsRoot" {...props} />;

export const TabsList = ({...props}) => <Tabs.List className="TabsList" {...props} />;

export const TabsTrigger = ({ ...props }) => <Tabs.Trigger className="TabsTrigger" {...props} value={props.value} />;

export const TabsContent = ({...props}) => <Tabs.Content className="TabsContent" {...props} value={props.value} />;

export const TabsDemo = () => (
	<TabsRoot defaultValue="tab1">
		<TabsList className="TabsList" aria-label="Manage your account">
			<TabsTrigger value="tab1">
                <BugIcon /> <span>Tab One</span>
			</TabsTrigger>
			<TabsTrigger value="tab2">
                <CatIcon /> <span>Tab Two</span>
			</TabsTrigger>
            <TabsTrigger value="tab3">
                <DogIcon /> <span>Tab Three</span>
			</TabsTrigger>
            <TabsTrigger value="tab4">
                <BirdIcon /> <span>Tab Four</span>
			</TabsTrigger>
		</TabsList>
		<TabsContent value="tab1">
			<p>Tabs Content One</p>
		</TabsContent>
		<TabsContent value="tab2">
            <p>Tabs Content Two</p>
		</TabsContent>
        <TabsContent value="tab3">
            <p>Tabs Content Three</p>
		</TabsContent>
        <TabsContent value="tab4">
            <p>Tabs Content Four</p>
		</TabsContent>
	</TabsRoot>
);
