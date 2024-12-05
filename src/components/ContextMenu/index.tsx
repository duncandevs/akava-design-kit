import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { Dot, CheckIcon, ChevronRight } from "lucide-react";
import { cn } from "../../utils";
import "./ContextMenu.css";

export const ContextMenuRoot = ContextMenu.Root;

export const ContextMenuTrigger = ContextMenu.Trigger;

export const ContextMenuPortal = ContextMenu.Portal;

export const ContextMenuContent = ({...props}) => <ContextMenu.Content className={cn("ContextMenuTrigger", props.className)} {...props} />;

export const ContextMenuItem = ({...props}) => <ContextMenu.Item className={cn("ContextMenuItem", props.className)} {...props} />;

export const ContextMenuSub = ({...props}) => <ContextMenu.Sub {...props} />;

export const ContextMenuSubTrigger = ({...props}) => <ContextMenu.SubTrigger className={cn("ContextMenuSubTrigger", props.className)} {...props} />;

export const ContextMenuSubContent = ({...props}) => <ContextMenu.SubContent className={cn("ContextMenuSubContent", props.className)} {...props} />;

export const ContextMenuSeparator = ({...props}) => <ContextMenu.Separator className={cn("ContextMenuSeparator", props.className)} {...props} />;

export const ContextMenuLabel = ({...props}) => <ContextMenu.Label className={cn("ContextMenuLabel", props.className)} {...props} />;

export const ContextMenuRadioGroup = ({...props}) => <ContextMenu.RadioGroup className={cn("ContextMenuRadioGroup", props.className)} {...props} />;

export const ContextMenuRadioItem = ({...props}) => <ContextMenu.RadioItem {...props} value={props.value}/>;

export const ContextMenuItemIndicator = ({...props}) => <ContextMenu.ItemIndicator {...props} />;

export const ContextMenuCheckboxItem = ({...props}) => <ContextMenu.ContextMenuCheckboxItem {...props} />;


export const ContextMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<ContextMenuRoot>
			<ContextMenuTrigger className="ContextMenuTrigger">
				Right-click here.
			</ContextMenuTrigger>
			<ContextMenuPortal>
				<ContextMenuContent
					className="ContextMenuContent"
					sideOffset={5}
					align="end"
				>
					<ContextMenuItem className="ContextMenuItem">
						Back <div className="RightSlot">⌘+[</div>
					</ContextMenuItem>
					<ContextMenuItem className="ContextMenuItem" disabled>
						Forward <div className="RightSlot">⌘+]</div>
					</ContextMenuItem>
					<ContextMenuItem className="ContextMenuItem">
						Reload <div className="RightSlot">⌘+R</div>
					</ContextMenuItem>
					<ContextMenuSub>
						<ContextMenuSubTrigger className="ContextMenuSubTrigger">
							More Tools
							<div className="RightSlot">
								<ChevronRight />
							</div>
						</ContextMenuSubTrigger>
						<ContextMenuPortal>
							<ContextMenuSubContent
								className="ContextMenuSubContent"
								sideOffset={2}
								alignOffset={-5}
							>
								<ContextMenuItem className="ContextMenuItem">
									Save Page As… <div className="RightSlot">⌘+S</div>
								</ContextMenuItem>
								<ContextMenuItem className="ContextMenuItem">
									Create Shortcut…
								</ContextMenuItem>
								<ContextMenuItem className="ContextMenuItem">
									Name Window…
								</ContextMenuItem>
								<ContextMenuSeparator className="ContextMenuSeparator" />
								<ContextMenuItem className="ContextMenuItem">
									Developer Tools
								</ContextMenuItem>
							</ContextMenuSubContent>
						</ContextMenuPortal>
					</ContextMenuSub>

					<ContextMenuSeparator className="ContextMenuSeparator" />

					<ContextMenuCheckboxItem
						className="ContextMenuCheckboxItem"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<ContextMenuItemIndicator className="ContextMenuItemIndicator">
							<CheckIcon />
						</ContextMenuItemIndicator>
						Show Bookmarks <div className="RightSlot">⌘+B</div>
					</ContextMenuCheckboxItem>
					<ContextMenuCheckboxItem
						className="ContextMenuCheckboxItem"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<ContextMenuItemIndicator className="ContextMenuItemIndicator">
							<CheckIcon />
						</ContextMenuItemIndicator>
						Show Full URLs
					</ContextMenuCheckboxItem>

					<ContextMenuSeparator className="ContextMenuSeparator" />

					<ContextMenuLabel className="ContextMenuLabel">
						People
					</ContextMenuLabel>
					<ContextMenuRadioGroup value={person} onValueChange={setPerson}>
						<ContextMenuRadioItem
							className="ContextMenuRadioItem"
							value="pedro"
						>
							<ContextMenuItemIndicator className="ContextMenuItemIndicator">
								<Dot />
							</ContextMenuItemIndicator>
							Pedro Duarte
						</ContextMenuRadioItem>
						<ContextMenuRadioItem
							className="ContextMenuRadioItem"
							value="colm"
						>
							<ContextMenuItemIndicator className="ContextMenuItemIndicator">
								<Dot />
							</ContextMenuItemIndicator>
							Colm Tuite
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuContent>
			</ContextMenuPortal>
		</ContextMenuRoot>
	);
};
