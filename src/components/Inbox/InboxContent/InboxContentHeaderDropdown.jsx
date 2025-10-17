import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";


const InboxContentHeaderDropdown = ({ text1, text2, text3, icon, shortcut1, shortcut2 }) => {
  const Icon = icon;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button variant="outline"><Icon className="size-4 text-gray-600" /></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="text-gray-600">{text1}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-gray-600">
            {text2}
            <DropdownMenuShortcut className="text-gray-600">{shortcut1}</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-600">
            {text3}
            <DropdownMenuShortcut className="text-gray-600">{shortcut2}</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default InboxContentHeaderDropdown;