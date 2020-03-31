import React from "react";
import "./styles.scss";

// Components

import { StatisticsBlock } from "./components/StatisticsBlock";
import { CreateBlock } from "./components/CreateBlock";
import { AgendaBlock } from "./components/AgendaBlock";

const CreatePostPage = () => {
  return (
    <div className="create-page">
      <StatisticsBlock />
      <CreateBlock />
      <AgendaBlock />
    </div>
  );
};

export default CreatePostPage;
