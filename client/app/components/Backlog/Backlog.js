import React, {useState, useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useDrag} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import {getActiveStories, getTrashedStories} from '../../state/stories/storiesSelectors';
import {isBacklogShown} from '../../state/ui/uiSelectors';
import {L10nContext} from '../../services/l10n';
import BacklogActive from './BacklogActive';
import BacklogTrash from './BacklogTrash';
import StoryAddForm from './StoryAddForm';
import BacklogModeButtons from './BacklogModeButtons';
import {DEFAULT_BACKLOG_WIDTH} from '../dimensions';

import {StyledBacklog, StyledBacklogWidthDragHandle} from './_styled';

/**
 * The backlog contains two display modes:  active and trash
 * if backlog is active, a form to add new stories and list of all (non-trashed) stories in the room is display
 * if trash is active, only a list of "trashed" stories is displayed
 *
 */
const Backlog = ({backlogShown, trashedStoriesCount, activeStoriesCount}) => {
  const {t} = useContext(L10nContext);
  const [showTrash, setShowTrash] = useState(false);
  const [backlogWidth, setBacklogWidth] = useState(DEFAULT_BACKLOG_WIDTH);

  // There is no corresponding drop / useDrop.
  // We just need the dragging functionality, and set the new width of the backlog on "end(...)"
  const [, drag, preview] = useDrag(
    () => ({
      type: 'BACKLOG_WIDTH_HANDLE',
      end: (item, monitor) => {
        const {x} = monitor.getSourceClientOffset();
        setBacklogWidth(Math.max(DEFAULT_BACKLOG_WIDTH, x));
      }
    }),
    []
  );

  useEffect(() => {
    // make the default drag invisible. See Board.js for the "<BacklogWidthDragLayer />" which we display during drag
    preview(getEmptyImage(), {captureDraggingState: true});
  }, []);

  return (
    <StyledBacklog shown={backlogShown} data-testid="backlog" width={backlogWidth}>
      <StyledBacklogWidthDragHandle ref={drag} />
      <BacklogModeButtons
        t={t}
        onShowBacklog={() => setShowTrash(false)}
        onShowTrash={() => setShowTrash(true)}
        trashShown={showTrash}
        trashedStoriesCount={trashedStoriesCount}
        activeStoriesCount={activeStoriesCount}
      />

      {showTrash && <BacklogTrash />}
      {!showTrash && <StoryAddForm />}
      {!showTrash && <BacklogActive />}
    </StyledBacklog>
  );
};

Backlog.propTypes = {
  backlogShown: PropTypes.bool,
  trashedStoriesCount: PropTypes.number.isRequired,
  activeStoriesCount: PropTypes.number.isRequired
};

export default connect((state) => ({
  backlogShown: isBacklogShown(state),
  trashedStoriesCount: getTrashedStories(state).length,
  activeStoriesCount: getActiveStories(state).length
}))(Backlog);
