import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
	Menu,
	Dot,
	CheckIcon,
	ChevronRightIcon,
} from "lucide-react";
import "./DropdownMenu.css";
import { cn } from "../../utils";
import IconButton from "../Buttons/IconButton";

export const DropdownMenuRoot = DropdownMenu.Root;

export const DropdownMenuTrigger = DropdownMenu.Trigger;

export const DropdownMenuPortal = DropdownMenu.Portal;

export const DropdownMenuContent = ({...props}) => <DropdownMenu.Content className={cn("DropdownMenuContent", props.className)} {...props} />;

export const DropdownMenuItem = ({...props}) => <DropdownMenu.Item className={cn("DropdownMenuItem", props.className)} {...props} />;

export const DropdownMenuSub = DropdownMenu.Sub;

export const DropdownMenuSubTrigger = ({...props}) => <DropdownMenu.SubTrigger className={cn("DropdownMenuSubTrigger", props.className)} {...props} />;

export const DropdownMenuSubContent = ({...props}) => <DropdownMenu.SubContent className={cn("DropdownMenuSubContent", props.className)} {...props} />;

export const DropdownMenuSeparator = ({...props}) => <DropdownMenu.Separator className={cn("DropdownMenuSeparator", props.className)} {...props}  />;

export const DropdownMenuCheckboxItem = ({...props}) => <DropdownMenu.CheckboxItem className={cn("DropdownMenuCheckboxItem", props.className)} {...props} />;

export const DropdownMenuItemIndicator = ({...props}) => <DropdownMenu.ItemIndicator className={cn("DropdownMenuItemIndicator", props.className)} {...props}  />;

export const DropdownMenuLabel = ({...props}) => <DropdownMenu.Label className={cn("DropdownMenuLabel", props.className)} {...props}  />;

export const DropdownMenuRadioGroup = ({...props}) => <DropdownMenu.RadioGroup className={cn("DropdownMenuRadioGroup", props.className)} {...props} />;

export const DropdownMenuRadioItem = ({ value, ...props }) => <DropdownMenu.RadioItem className={cn("DropdownMenuRadioItem", props.className)} value={value} {...props} />;

export const DropdownMenuArrow = ({...props}) => <DropdownMenu.Arrow  className={cn("DropdownMenuArrow", props.className)} {...props} />;

export const DropdownMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");

	return (
		<DropdownMenuRoot>
			<DropdownMenuTrigger asChild>
				<button className="IconButton" aria-label="Customise options">
					<Menu />
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuPortal>
				<DropdownMenuContent sideOffset={5}>
					<DropdownMenuItem>
						New Tab <div className="RightSlot">⌘+T</div>
					</DropdownMenuItem>
					<DropdownMenuItem>
						New Window <div className="RightSlot">⌘+N</div>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						New Private Window <div className="RightSlot">⇧+⌘+N</div>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger className="DropdownMenuSubTrigger">
							More Tools
							<div className="RightSlot">
								<ChevronRightIcon />
							</div>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenuItem>
									Save Page As… <div className="RightSlot">⌘+S</div>
								</DropdownMenuItem>
								<DropdownMenuItem>
									Create Shortcut…
								</DropdownMenuItem>
								<DropdownMenuItem>
									Name Window…
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									Developer Tools
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>

					<DropdownMenuSeparator />

					<DropdownMenuCheckboxItem
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenuItemIndicator>
							<CheckIcon />
						</DropdownMenuItemIndicator>
						Show Bookmarks <div className="RightSlot">⌘+B</div>
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenuItemIndicator>
							<CheckIcon />
						</DropdownMenuItemIndicator>
						Show Full URLs
					</DropdownMenuCheckboxItem>

					<DropdownMenuSeparator />

					<DropdownMenuLabel className="DropdownMenuLabel">
						People
					</DropdownMenuLabel>
					<DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenuRadioItem
							value="pedro"
						>
							<DropdownMenuItemIndicator>
								<Dot />
							</DropdownMenuItemIndicator>
							Pedro Duarte
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							value="colm"
						>
							<DropdownMenuItemIndicator>
								<Dot />
							</DropdownMenuItemIndicator>
							Colm Tuite
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>

					<DropdownMenuArrow />
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenuRoot>
	);
};
