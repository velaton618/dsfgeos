import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

const source = `
# Conferences - DBCI

## Table of Contents

1. [Conferences](#conferences)
##  Conferences

	`;

function ConferencesGPTS() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default ConferencesGPTS;
