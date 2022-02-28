import React, { Component } from "react";

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
      greeting: 'Hi THere',
      isOpen: true
    };
  }

  render(){
    return (
      <div>
        {this.props.heading}
      </div>
    );
  }
}
