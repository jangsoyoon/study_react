import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs  from "./Tabs";
import TabButton from "./TabButton";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }
  const selectedDiv = (selectedTopic)=>(<div id="tab-content">
    <h3>
  {selectedTopic.title}
  </h3>
  <p>
  {selectedTopic.description} 
  </p>
  <pre>
  <code>
  {selectedTopic.code}
  </code>
</pre>
</div>)
    return(
        <Section title="Examples" id='examples'>
            <Tabs buttons={Object.entries(EXAMPLES).map(([key, value], i) => (<TabButton key={i} isselected={selectedTopic ? selectedTopic.title : ""} onClick={() => handleSelect(value)} title={value.title}></TabButton>))}>
            {!selectedTopic ? <p>Please select a topic.</p> : selectedDiv(selectedTopic)}
            </Tabs>
        </Section>
    );
}
