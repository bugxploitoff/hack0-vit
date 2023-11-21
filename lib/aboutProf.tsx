import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

interface Props {
    Language: string
}

export default function Prof() {
    const codeString = `
_____________________________________________
|                 #/bin/bash                 | ACHDJ RRGV RWDR GWEK NE3Q3VR
|                  .~7777~:                  | ROOKWG4 WG4H64G WGRQ3 WGWRGR
|                .^7?7777?7!:                | EO GWRH 3RH3J JH4BT J42TB JH
|               ^7???7777????!:              |  LWEB4 4TBHJ4 HJB JH4BT 4JHG
|             :7??J?777777?J???!.            | Y IJHWR4 4WJHFH43 JHW4BB8 4H
|           .!J?7JJ77777777JY??J?^           | OTNHJWBR 4UT437 BRSHB WRIHGB
|          ^?Y?7?J?7?????77???7?Y?~          | UHS ERHJF WRUG4 WI4UHWFI WRU
|         ~????J55PGGGBGGGGP5YJ????~         |  EWRHFGVW QEGFR73GB W4UGBEHJ
|        :?7?P#&##############&#GP?7^        | RNTWRHJFV UQEVTR3G WUGF8W4UI
|        :7?B##&######BG##########B?~        | E HAGHVEFW HUGQYRGW4BG SHUFB
|         !J##BGGBBGGY~^!5GGBGPB##G?:        | ASEDJBVCUY7 AUYGFBWUFYG87 AG
|         .~YBBY!!!~~^^^^^~~~!JG#G?~         | DTAEHBFE7Y6B UAYGEFY BAUEYY7
|           :7P#G7^^^^^^^^^:~P&#57^          | YABIJHVEAF67QVAW BIEWUGF73FR
|             :7PB57!~^^^~!Y##P?^.           |  RUNSRGHWRG7 WIERUGF8W7BI3U4
|               :?GBP!~^~PB#G?:              | FTIG WHERBGF IUWQEG WIUEG UE
|          .:~!77?JJJ7!!7JJJ?7!!^:.          | O LJHWEBFY4 WEUGBF WEU4GT WI
|    ^JYJY5GGGGGGGGGGGGGGGGGGGGGGGP5JJJJ^    | RWDWJBFYU4 4UGTW I423UGT GW4
|    5@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@5    |  IW4JBHR 4WHBTRHW WJB 4WHB G
|    5@&&&&##########&&&&##############&5    | TTGJBHWV4QR 4Q3V F4WHG FB 4F
|    5@&&&&########&&#BB#&&############&5    | HHAHJRWGT U4WGTF HU4WGBT G3U
|    5@&&&&&######&#J^..^J#&###########&5    | EWRJHGFV WURGTR74UB IUWTH T4
|    5@&&&&&&#####&P.    .5&###########&5    |  IMWRHJEGFBUY4GWF 24UH2IR GW
|    5@&&&&&&&&###&#?:..:?#&###########&5    | BTEWEHJBF IUEWQGF WEUGFHUIWE
|    5@&&&&&&&&&&&#&&#GGB&&############&5    | UTWERGF IQUEGFUWE HEGBFUW QE
|    5@&&&&&&&&&&&&&&&&&&&##########&&&&5    | IOIWEUIH 24YGR24UH WRYG4423U
|    5@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@P    | L SQHEUVGRFU2 2U43YGRB QUIRH
|    ^P&@@@@@@#PPPPPPPPPPPPPPPPB@@@@@@&P^    | DSHQEUFGRW IQWUEGHRFU4W EQIU
|  ^:~#@@@@@@@@&&&&&&&&&&&&&&&&&@@@@@@@#^^^  | WETJHQWVERFYGEU R24UYRB EFUY
|  &#B####BBBBB#&&&&&&&&&&&###############&  | EEHEWQJHVF24YUHRNQHE  U13G37
|  &&BB#B#BBBBB&&&&&&&&&&&&####B#####BB#B#&  | B EQJHWGFVEYQB UY23GR7UB QIU
|____________________________________________| 3WKQQEH QU3GREUI UEQGBRF37 U
    `;
    return (
        <SyntaxHighlighter language="ascii" style={nightOwl} customStyle={{
            backgroundColor: "transparent",
            opacity: 1,

        }} >
          {codeString}
        </SyntaxHighlighter>
    );
}