import React from "react";
import Code_Editor from "../components/code_editor";
import { Userlist } from "../components/users";

export default function Codepage(){
return(
    <div>
        
        <Userlist></Userlist>
        <Code_Editor></Code_Editor>
       
    </div>
)
}