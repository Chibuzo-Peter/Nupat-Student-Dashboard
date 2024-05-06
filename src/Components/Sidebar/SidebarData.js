import { Component } from "react";
import {  AccountCircle, AccountCircleOutlined, Description, DescriptionOutlined, GridView, GridViewRounded, LibraryAdd,  Logout,  Padding,  RecordVoiceOverOutlined,  ReduceCapacityOutlined, SettingsOutlined, Today, WhatsApp,  } from '@mui/icons-material'

export const SidebarList = [
    {   
        id:"1",
        component:"a",
        href:"Dashboard",
        icon:GridViewRounded,
        text: "Overview",
        
    },
    {   
        id:"2",
        component:"a",
        href:"profile",
        icon:AccountCircleOutlined,
        text: "Profile",

    },
    {
        id:"3",
        component:"a",
        href:"facilitator",
        icon:RecordVoiceOverOutlined,
        text: "Facilitator",

    },
    {
        id:"4",
        component:"a",
        href:"courses",
        icon:LibraryAdd,
        text: "Courses",

    },
    {
        id:"5",
        component:"a",
        href:"resources",
        icon:DescriptionOutlined,
        text: "Resources",

    },
    {
        id:"6",
        component:"a",
        href:"Chat",
        icon:WhatsApp,
        text: "Chats",

    },
    {
        id:"7",
        component:"a",
        href:"Calendar",
        icon:Today,
        text: "Calendar",

    },



];