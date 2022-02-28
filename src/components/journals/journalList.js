import React, { Component } from "react";
import { JournalEntry } from "./journalEntry";

const rawJournalData = [
  { title: "Post One", content: "Post content", status: "draft" },
  { title: "Post Two", content: "More content", status: "published" },
  { title: "Post Three", content: "More content", status: "published" },
  { title: "Post Four", content: "More content", status: "published" }
];

export default class JournalList extends Component {
  constructor(props) {
    super();

    this.state = {
      journalData: rawJournalData,
      isOpen: true
    };
  }


  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });

    return (
      <div>
        <h1>{this.props.heading}</h1>
        {journalEntries}
      </div>
    );
  }
}