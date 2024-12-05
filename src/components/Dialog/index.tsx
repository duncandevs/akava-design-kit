import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { User } from "lucide-react";
import "./Dialog.css";
import { cn } from "../../utils";
import Button from "../Buttons/Button";
import Text from "../Text";

export const DialogRoot = DialogPrimitive.Root;

export const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

export const DialogTitle = ({...props}) => <DialogPrimitive.Title className={cn("DialogTitle", props.className)} {...props} />;

export const DialogOverlay = ({...props}) => <DialogPrimitive.Overlay className={cn("DialogOverlay", props.className)} {...props} />;

export const DialogDescription = ({...props}) => <DialogPrimitive.Description className={cn("DialogDescription", props.className)} {...props} />;

export const DialogContentComp = ({ ...props }) => <DialogPrimitive.Content className={cn("DialogContent", props.className)} {...props}/>;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = ({ ...props }) => <DialogPortal>;
    <DialogOverlay />
    <DialogContentComp>
        {props.children}
    </DialogContentComp>
</DialogPortal>;

export const DialogDemo = () => (
	<DialogRoot>
		<DialogTrigger asChild>
			<Button size="medium" variant="primary" LeftIcon={User}>Edit profile</Button>
		</DialogTrigger>
		<DialogContent>
            <DialogTitle className="text-center">
                <Text variant="s2">Edit profile</Text>
            </DialogTitle>
            <DialogDescription className="text-center">
                <Text variant="b3" className="dialog-description-text">
                    Make changes to your profile here. Click save when you're done.
                </Text>
            </DialogDescription>
            <div
                style={{ display: "flex", marginTop: 25, justifyContent: "center", gap: 16 }}
            >
                <DialogClose asChild>
                    <Button variant="primary" size="medium">Save changes</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button variant="outline" size="medium">Close</Button>
                </DialogClose>
            </div>
		</DialogContent>
	</DialogRoot>
);
