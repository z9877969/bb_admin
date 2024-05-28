// import StarterKit from '@tiptap/starter-kit';
// import {
//   MenuButtonBold,
//   MenuButtonItalic,
//   MenuControlsContainer,
//   MenuDivider,
//   MenuBar,
//   MenuSelectHeading,
//   RichTextEditor,
//   ColorPicker,
// } from 'mui-tiptap';
// import { useRef } from 'react';

// function RichInput() {
//   const rteRef = useRef(null);

//   const [color, setColor] = useState(0);

//   return (
//     <div>
//       <ColorPicker onChange={(v) => setColor(v)} value={color} />
//       <RichTextEditor
//         ref={rteRef}
//         extensions={[StarterKit]} // Or any Tiptap extensions you wish!
//         content="<p>Hello world</p>" // Initial content for the editor
//         // Optionally include `renderControls` for a menu-bar atop the editor:
//         renderControls={() => (
//           <MenuControlsContainer>
//             <MenuSelectHeading />
//             <MenuDivider />
//             <MenuButtonBold />
//             <MenuButtonItalic />
//             <MenuBar />
//             {/* Add more controls of your choosing here */}
//           </MenuControlsContainer>
//         )}
//       />

//       <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
//         Log HTML
//       </Button>
//     </div>
//   );
// }
