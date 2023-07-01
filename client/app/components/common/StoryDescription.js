import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Linkify from 'react-linkify';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {toggleMarkdownEnabled} from '../../state/actions/uiStateActions';
import {StyledStoryText, StyledStoryTextExpandButton, StyledToggleIcon} from './_styled';

const StoryDescription = ({
  text = '',
  storyId,
  textExpandThreshold = 200,
  markdownEnabled,
  toggleMarkdownEnabled,
  showMarkdownToggle = true,
  scroll = true
}) => {
  const [textExpanded, setTextExpanded] = useState(false);
  useEffect(() => setTextExpanded(false), [storyId]); // reset expanded state to false if story id changes.

  const originalDescriptionLength = text.length;
  const descriptionString =
    originalDescriptionLength <= textExpandThreshold || textExpanded
      ? text
      : text.substring(0, textExpandThreshold) + '...';

  const linkRenderer = (href, linkText, key) => (
    <a target="blank" href={href} rel="noopener noreferrer" key={key}>
      {linkText}
    </a>
  );

  return (
    <React.Fragment>
      <StyledStoryText $md={markdownEnabled} $scroll={scroll} data-testid="storyText">
        {markdownEnabled && (
          <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
            {descriptionString}
          </ReactMarkdown>
        )}
        {!markdownEnabled && (
          <Linkify componentDecorator={linkRenderer}> {descriptionString} </Linkify>
        )}

        {originalDescriptionLength > textExpandThreshold && !textExpanded && (
          <StyledStoryTextExpandButton
            className="pure-button pure-button-primary"
            onClick={() => setTextExpanded(true)}
          >
            <i className="icon-angle-double-down"></i>
          </StyledStoryTextExpandButton>
        )}
        {originalDescriptionLength > textExpandThreshold && textExpanded && (
          <StyledStoryTextExpandButton
            className="pure-button pure-button-primary"
            onClick={() => setTextExpanded(false)}
          >
            <i className="icon-angle-double-up"></i>
          </StyledStoryTextExpandButton>
        )}
      </StyledStoryText>

      {showMarkdownToggle && originalDescriptionLength > 0 && (
        <StyledToggleIcon
          data-testid="markdownToggleButton"
          $on={markdownEnabled ? '1' : ''}
          className="icon-markdown"
          onClick={toggleMarkdownEnabled}
        ></StyledToggleIcon>
      )}
    </React.Fragment>
  );
};

StoryDescription.propTypes = {
  storyId: PropTypes.string,
  text: PropTypes.string,
  markdownEnabled: PropTypes.bool,
  toggleMarkdownEnabled: PropTypes.func,
  showMarkdownToggle: PropTypes.bool,
  scroll: PropTypes.bool,
  textExpandThreshold: PropTypes.number
};

export default connect(
  (state) => ({
    markdownEnabled: state.ui.markdownEnabled
  }),
  {toggleMarkdownEnabled}
)(StoryDescription);
