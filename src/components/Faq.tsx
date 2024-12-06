import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Faq () {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [{id: 1, question: "what", answer: "a"}, {id: 2, question: "what", answer: "a"}, {id: 3, question: "what", answer: "a"}];
    return (<></>);
}

export default Faq;