import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const DictaPhone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition</span>;
  }
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>start</button>
      <button onClick={SpeechRecognition.stopListening}>stop</button>
      <button onClick={resetTranscript}>reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default DictaPhone;
// import React from 'react'
// import {createSpeechlySpeechRecognition} from "@speechly/speech-recognition-polyfill"
// import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition"
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)
// const DictaPhone = () => {
//   return (
//     <div>
//       <h2>VOice</h2>
//     </div>
//   )
// }

// export default DictaPhone
