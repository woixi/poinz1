# Poinz - Distributed Planning Poker

[![Build Status](https://github.com/Zuehlke/poinz/actions/workflows/master.yml/badge.svg)](https://github.com/Zuehlke/poinz/actions/workflows/master.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Release](https://img.shields.io/github/v/release/Zuehlke/Poinz.svg?style=flat)]()
[![Last Commit](https://img.shields.io/github/last-commit/Zuehlke/Poinz.svg?style=flat)]()

Poinz (/pɔɪnts/) is a simple web app for distributed teams in an agile setup. It allows to easily estimate items of interest (e.g. "stories").

The goal was to provide a ready-to-use tool without the hassle of registration/login, setup and a lot of configuration.

Checkout the App at [https://www.poinz.app](https://www.poinz.app)

![poinz_screenshot](https://user-images.githubusercontent.com/1777143/153183461-03a0e0b4-239a-4c7b-a49d-a285be828f09.png)

Similar tools are : https://www.pointingpoker.com/ or https://www.planningpoker.com/

## User Manual

Confused? Or you want to learn about hidden features? Read the [User Manual](docu/manual.md).

## Contribute

You can contribute in multiple ways...

* Maybe you have a feature request? Found a bug? General feedback? Please open a new [discussion](https://github.com/Zuehlke/poinz/discussions).
* You want to extend Poinz? Or fix one of the issues? Check out the [Technical documentation](./docu/technicalDocu.md).

```
poinz
├─ .editorconfig
├─ .git
│  ├─ branches
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ fsmonitor--daemon
│  │  └─ cookies
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ c454aefa4870fbc72ee6c6234ff448563503be
│  │  ├─ 0c
│  │  │  └─ cf70f5a515a3631f867c67d0a6750a72b4b8bc
│  │  ├─ 1f
│  │  │  └─ 4abce94f42016e416587553430537dd77f35ae
│  │  ├─ 43
│  │  │  └─ 0f81cf8a7074958f27950588cecd6d80b3eae7
│  │  ├─ 57
│  │  │  └─ 69de59746f7b46ad83166f6d3a29b5c1c9f8bc
│  │  ├─ 70
│  │  │  └─ 3b46d4b4275ff1c089f3c48fc1ae0fc567d1c2
│  │  ├─ 74
│  │  │  └─ 7c4f74b90f34e8d6905c5015a473d774fb8199
│  │  ├─ 78
│  │  │  └─ cd686a3dc3f14f7f7b413496e0827976310784
│  │  ├─ 79
│  │  │  └─ 0f1a8df84265e388b178571e11421525a2b329
│  │  ├─ 8c
│  │  │  └─ 0a68d91be741d71eeebdddb07318c5f973543f
│  │  ├─ 90
│  │  │  └─ a65b0150156e376a25e0e22b5df29fe6bc457c
│  │  ├─ a3
│  │  │  └─ 34107e56468057ea93fa80c3ee43c71db5428f
│  │  ├─ ab
│  │  │  └─ 08d6edb8eede07519e8d490c000fa67366e847
│  │  ├─ c5
│  │  │  └─ 4c328c208ee62f7948856ad30b7d4c1cee63d0
│  │  ├─ cd
│  │  │  └─ 2df4f6dd72a9a11036da56c286b7ebdd8fd835
│  │  ├─ d9
│  │  │  └─ bd836937f7c93d57f9cacb973366ffb42571be
│  │  ├─ ef
│  │  │  └─ 2394fdf8e9ff3b0297902f6dc544d3acb0827a
│  │  ├─ f4
│  │  │  └─ 92dba3d730fce6bb81d8b72c4d4f686fe03587
│  │  ├─ fa
│  │  │  └─ 97969a97581647dd205b4375ce7effdd72f2cd
│  │  ├─ fb
│  │  │  └─ dc54876877c63beee1260f5c2f5e66c7a258df
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-fad5f624724d47ee369c8bb36488049dd7f35532.idx
│  │     └─ pack-fad5f624724d47ee369c8bb36488049dd7f35532.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitattributes
├─ .github
│  └─ workflows
│     ├─ development.yml
│     └─ master.yml
├─ .gitignore
├─ .nvmrc
├─ .prettierrc
├─ build
│  ├─ build.mjs
│  ├─ buildUtils.mjs
│  ├─ checkTranslationKeys.mjs
│  ├─ dockerImage.mjs
│  └─ grabUpdatedFontelloZip.mjs
├─ CHANGELOG.md
├─ client
│  ├─ .eslintrc
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ app
│  │  ├─ app.js
│  │  ├─ assets
│  │  │  ├─ aazuotps_30.12.13-webfont.woff2
│  │  │  ├─ avatars
│  │  │  │  ├─ bat_tr_64.png
│  │  │  │  ├─ beaver_tr_64.png
│  │  │  │  ├─ cat_tr_64.png
│  │  │  │  ├─ chimpanse_tr_64.png
│  │  │  │  ├─ cow_tr_64.png
│  │  │  │  ├─ dog_tr_64.png
│  │  │  │  ├─ elefant_tr_64.png
│  │  │  │  ├─ giraffe_tr_64.png
│  │  │  │  ├─ gorilla_tr_64.png
│  │  │  │  ├─ horse_tr_64.png
│  │  │  │  ├─ index.js
│  │  │  │  ├─ koala_tr_64.png
│  │  │  │  ├─ leopard_tr_64.png
│  │  │  │  ├─ LICENSE
│  │  │  │  ├─ lion_tr_64.png
│  │  │  │  ├─ moose_tr_64.png
│  │  │  │  ├─ owl_tr_64.png
│  │  │  │  ├─ piggy_tr_64.png
│  │  │  │  ├─ racoon_tr_64.png
│  │  │  │  ├─ special.png
│  │  │  │  ├─ squirrel_tr_64.png
│  │  │  │  ├─ tiger_tr_64.png
│  │  │  │  └─ zebra_tr_64.png
│  │  │  ├─ font
│  │  │  │  ├─ animation.css
│  │  │  │  ├─ config.json
│  │  │  │  ├─ poinz.css
│  │  │  │  ├─ poinz.eot
│  │  │  │  ├─ poinz.svg
│  │  │  │  ├─ poinz.ttf
│  │  │  │  ├─ poinz.woff
│  │  │  │  └─ poinz.woff2
│  │  │  ├─ i18n
│  │  │  │  ├─ de.json
│  │  │  │  └─ en.json
│  │  │  ├─ landing_bg_z2020_lightblue.jpg
│  │  │  └─ landing_bg_z2022_grey.jpg
│  │  ├─ components
│  │  │  ├─ ActionLog
│  │  │  │  ├─ ActionLog.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ AppStatus
│  │  │  │  ├─ AppStatus.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ Backlog
│  │  │  │  ├─ Backlog.js
│  │  │  │  ├─ BacklogActive.js
│  │  │  │  ├─ BacklogFileDropWrapper.js
│  │  │  │  ├─ BacklogModeButtons.js
│  │  │  │  ├─ BacklogToolbar.js
│  │  │  │  ├─ BacklogTrash.js
│  │  │  │  ├─ Story.js
│  │  │  │  ├─ StoryAddForm.js
│  │  │  │  ├─ StoryEditForm.js
│  │  │  │  ├─ StoryEditFormButtonGroup.js
│  │  │  │  ├─ TrashedStory.js
│  │  │  │  ├─ useStorySortingAndFiltering.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ colors.js
│  │  │  ├─ common
│  │  │  │  ├─ Avatar.js
│  │  │  │  ├─ Changelog.js
│  │  │  │  ├─ EasterEgg.js
│  │  │  │  ├─ ErrorBoundary.js
│  │  │  │  ├─ PasswordField.js
│  │  │  │  ├─ StoryDescription.js
│  │  │  │  ├─ storySortings.js
│  │  │  │  ├─ UndecidedBadge.js
│  │  │  │  ├─ useOutsideClick.js
│  │  │  │  ├─ ValidatedInput.js
│  │  │  │  ├─ ValueBadge.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ dimensions.js
│  │  │  ├─ EstimationArea
│  │  │  │  ├─ Card.js
│  │  │  │  ├─ Cards.js
│  │  │  │  ├─ ConfidenceButtons.js
│  │  │  │  ├─ EstimationArea.js
│  │  │  │  ├─ EstimationSummary.js
│  │  │  │  ├─ EstimationSummaryCard.js
│  │  │  │  ├─ getEstimationSummary.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ EstimationMatrix
│  │  │  │  ├─ EstimationMatrix.js
│  │  │  │  ├─ EstimationMatrixColumn.js
│  │  │  │  ├─ EstimationMatrixColumnUnestimated.js
│  │  │  │  ├─ EstimationMatrixStory.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ frontendInputValidation.js
│  │  │  ├─ Help
│  │  │  │  ├─ Help.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ Landing
│  │  │  │  ├─ ErrorPage.js
│  │  │  │  ├─ GithubRibbon.js
│  │  │  │  ├─ JoinRoomForm.js
│  │  │  │  ├─ Landing.js
│  │  │  │  ├─ RoomProtected.js
│  │  │  │  ├─ WhoAreYou.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ Main.js
│  │  │  ├─ Room
│  │  │  │  ├─ Board.js
│  │  │  │  ├─ FeedbackHint.js
│  │  │  │  ├─ MatrixToggle.js
│  │  │  │  ├─ Room.js
│  │  │  │  ├─ RoomFooter.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ Settings
│  │  │  │  ├─ CardConfigEditor.js
│  │  │  │  ├─ CardConfigEditorItem.js
│  │  │  │  ├─ RoomExportFileDownload.js
│  │  │  │  ├─ RoomSettings.js
│  │  │  │  ├─ Settings.js
│  │  │  │  ├─ UserSettings.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ TopBar
│  │  │  │  ├─ TopBar.js
│  │  │  │  ├─ WhoAmI.js
│  │  │  │  └─ _styled.js
│  │  │  ├─ Users
│  │  │  │  ├─ User.js
│  │  │  │  ├─ UserEstimationCard.js
│  │  │  │  ├─ Users.js
│  │  │  │  └─ _styled.js
│  │  │  └─ _styled.js
│  │  ├─ services
│  │  │  ├─ appConfig.js
│  │  │  ├─ l10n.js
│  │  │  ├─ restApi
│  │  │  │  ├─ appStatusService.js
│  │  │  │  ├─ checkStatusCode.js
│  │  │  │  ├─ errorLogService.js
│  │  │  │  └─ roomService.js
│  │  │  ├─ timeUtil.js
│  │  │  └─ uuid.js
│  │  ├─ state
│  │  │  ├─ actionLog
│  │  │  │  ├─ actionLogReducer.js
│  │  │  │  └─ actionLogSelectors.js
│  │  │  ├─ actions
│  │  │  │  ├─ commandActions.js
│  │  │  │  ├─ eventActions.js
│  │  │  │  └─ uiStateActions.js
│  │  │  ├─ clientSettingsStore.js
│  │  │  ├─ commandTracking
│  │  │  │  ├─ commandTrackingReducer.js
│  │  │  │  └─ commandTrackingSelectors.js
│  │  │  ├─ configureStore.js
│  │  │  ├─ estimations
│  │  │  │  ├─ estimationsReducer.js
│  │  │  │  └─ estimationsSelectors.js
│  │  │  ├─ getBrowserHistory.js
│  │  │  ├─ hub.js
│  │  │  ├─ initialState.js
│  │  │  ├─ joining
│  │  │  │  ├─ joiningReducer.js
│  │  │  │  └─ joiningSelectors.js
│  │  │  ├─ room
│  │  │  │  ├─ roomReducer.js
│  │  │  │  └─ roomSelectors.js
│  │  │  ├─ rootReducer.js
│  │  │  ├─ stories
│  │  │  │  ├─ storiesReducer.js
│  │  │  │  └─ storiesSelectors.js
│  │  │  ├─ ui
│  │  │  │  ├─ uiReducer.js
│  │  │  │  └─ uiSelectors.js
│  │  │  └─ users
│  │  │     ├─ usersReducer.js
│  │  │     └─ usersSelectors.js
│  │  └─ _styled.js
│  ├─ apple-touch-icon.png
│  ├─ babel.config.js
│  ├─ cypress
│  │  ├─ .eslintrc
│  │  ├─ .gitignore
│  │  ├─ e2e
│  │  │  ├─ appStatus.cy.js
│  │  │  ├─ backlogModification.cy.js
│  │  │  ├─ changeRoomSettings.cy.js
│  │  │  ├─ changeUserSettings.cy.js
│  │  │  ├─ estimateStory.cy.js
│  │  │  ├─ exportStories.cy.js
│  │  │  ├─ joinNewRandomRoom.cy.js
│  │  │  ├─ joinPasswordProtectedRoom.cy.js
│  │  │  ├─ mobileMenuToggling.cy.js
│  │  │  ├─ multiUser.cy.js
│  │  │  └─ _all.cy.js
│  │  ├─ elements
│  │  │  └─ elements.js
│  │  ├─ fixtures
│  │  │  ├─ stories.json
│  │  │  └─ users
│  │  │     ├─ default.json
│  │  │     └─ sergio.json
│  │  ├─ plugins
│  │  │  ├─ .eslintrc
│  │  │  └─ index.js
│  │  └─ support
│  │     ├─ commands.js
│  │     └─ e2e.js
│  ├─ cypress.config.js
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ parseChangelogMd.js
│  ├─ parseChangelogMdItem.js
│  ├─ removeDataTestIdAttributes.js
│  ├─ site.webmanifest
│  ├─ test
│  │  ├─ .babelrc
│  │  ├─ .eslintrc
│  │  ├─ integration
│  │  │  └─ eventActionReducersScenarios
│  │  │     ├─ backlogModifyingTest.js
│  │  │     ├─ disconnectAndKickTest.js
│  │  │     ├─ estimatingSettlingSettingTest.js
│  │  │     ├─ estimatingTest.js
│  │  │     ├─ events
│  │  │     │  ├─ .gitignore
│  │  │     │  ├─ backlogModifyingTest.json
│  │  │     │  ├─ disconnectAndKickTest.json
│  │  │     │  ├─ estimatingSettlingSettingTest.json
│  │  │     │  ├─ estimatingTest.json
│  │  │     │  ├─ includeAndExcludeTest.json
│  │  │     │  ├─ resetAndClearPasswordTest.json
│  │  │     │  ├─ roomConfigTest.json
│  │  │     │  ├─ roomJoiningAndLeavingTest.json
│  │  │     │  ├─ roomJoiningAndLeavingWithPasswordTest.json
│  │  │     │  └─ youGetKicked.json
│  │  │     ├─ getScenarioStartingState.js
│  │  │     ├─ includeAndExcludeTest.js
│  │  │     ├─ loadEventsFromJson.js
│  │  │     ├─ reduceMultipleEvents.js
│  │  │     ├─ resetAndClearPasswordTest.js
│  │  │     ├─ roomConfigTest.js
│  │  │     ├─ roomJoiningAndLeavingTest.js
│  │  │     ├─ roomJoiningAndLeavingWithPasswordTest.js
│  │  │     └─ youGetKickedTest.js
│  │  ├─ testUtils.js
│  │  └─ unit
│  │     ├─ commandActionsTest.js
│  │     ├─ configureStoreTest.js
│  │     ├─ EasterEggTest.js
│  │     ├─ getEstimationSummaryTest.js
│  │     ├─ l10nTest.js
│  │     ├─ parseChangelogMdItemTest.js
│  │     ├─ reducers
│  │     │  ├─ commandRejectedTest.js
│  │     │  ├─ commandSentTest.js
│  │     │  └─ roomStateFetchedTest.js
│  │     ├─ selectors
│  │     │  ├─ findNextStoryIdToEstimateTest.js
│  │     │  └─ usersSelectorsTest.js
│  │     ├─ setup.js
│  │     ├─ timeUtilTest.js
│  │     └─ uiReducerTest.js
│  ├─ webpack.analysis.config.js
│  ├─ webpack.config.js
│  └─ webpack.production.config.js
├─ conf.d
├─ context.tar.gz
├─ docker-compose.yaml
├─ Dockerfile.client
├─ Dockerfile.server
├─ docu
│  ├─ commandAndEventDocu.md
│  ├─ deployment.md
│  ├─ diagrams
│  │  ├─ ermCommandEvent.md
│  │  ├─ ermCommandEvent.md-1.svg
│  │  ├─ sequenceCommandHandlingExample.md
│  │  ├─ sequenceCommandHandlingExample.md-1.svg
│  │  ├─ sequenceCommandHandlingGeneric.md
│  │  └─ sequenceCommandHandlingGeneric.md-1.svg
│  ├─ docuSettings.mjs
│  ├─ manual.md
│  ├─ src
│  │  ├─ docuGenerator.mjs
│  │  ├─ gatherData.mjs
│  │  ├─ generateMermaidDiagrams.mjs
│  │  └─ renderDocu.mjs
│  ├─ technicalDocu.md
│  └─ templates
│     ├─ commandAndEventDocu.ejs
│     ├─ singleCommand.ejs
│     └─ singleEvent.ejs
├─ k8s-manifests
│  ├─ client.yaml
│  ├─ mongodb.yaml
│  ├─ nginx-ingress.yaml
│  └─ server.yaml
├─ LICENSE
├─ maintenance.html
├─ nginx.conf
├─ package-lock.json
├─ package.json
├─ README.md
├─ server
│  ├─ .eslintrc
│  ├─ migrate-mongo-config.js
│  ├─ migrate-util.js
│  ├─ migrations
│  │  ├─ 20201014180128-users-to-array.js
│  │  ├─ 20201014181259-stories-to-array.js
│  │  ├─ 20201017054522-avatar-to-zero.js
│  │  ├─ 20201019095546-remove-invalid-users.js
│  │  ├─ 20201019113504-truncate-story-title.js
│  │  ├─ 20201019134711-fix-username-length.js
│  │  ├─ 20201023190325-auto-reveal-on.js
│  │  └─ 20220301180047-remove-users-without-username.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ auth
│  │  │  ├─ generateSafeRandomHexString.js
│  │  │  ├─ jwtService.js
│  │  │  └─ roomPasswordService.js
│  │  ├─ commandHandlers
│  │  │  ├─ addStory.js
│  │  │  ├─ changeStory.js
│  │  │  ├─ clearStoryEstimate.js
│  │  │  ├─ commandHandlers.js
│  │  │  ├─ commonPreconditions.js
│  │  │  ├─ deleteStory.js
│  │  │  ├─ giveStoryEstimate.js
│  │  │  ├─ hasActiveStories.js
│  │  │  ├─ importStories.js
│  │  │  ├─ joinRoom.js
│  │  │  ├─ joinRoomSampleStory.js
│  │  │  ├─ kick.js
│  │  │  ├─ leaveRoom.js
│  │  │  ├─ newEstimationRound.js
│  │  │  ├─ parseCsvDataUrlToStories.js
│  │  │  ├─ parseJsonDataUrlToStories.js
│  │  │  ├─ restoreStory.js
│  │  │  ├─ reveal.js
│  │  │  ├─ selectStory.js
│  │  │  ├─ setAvatar.js
│  │  │  ├─ setCardConfig.js
│  │  │  ├─ setEmail.js
│  │  │  ├─ setPassword.js
│  │  │  ├─ setRoomConfig.js
│  │  │  ├─ setSortOrder.js
│  │  │  ├─ setStoryValue.js
│  │  │  ├─ settleEstimation.js
│  │  │  ├─ setUsername.js
│  │  │  ├─ toggleExclude.js
│  │  │  └─ trashStory.js
│  │  ├─ commandProcessor.js
│  │  ├─ defaultCardConfig.js
│  │  ├─ eventHandlers
│  │  │  ├─ avatarSet.js
│  │  │  ├─ cardConfigSet.js
│  │  │  ├─ connectionLost.js
│  │  │  ├─ consensusAchieved.js
│  │  │  ├─ emailSet.js
│  │  │  ├─ eventHandlers.js
│  │  │  ├─ excludedFromEstimations.js
│  │  │  ├─ importFailed.js
│  │  │  ├─ includedInEstimations.js
│  │  │  ├─ joinedRoom.js
│  │  │  ├─ kicked.js
│  │  │  ├─ leftRoom.js
│  │  │  ├─ newEstimationRoundStarted.js
│  │  │  ├─ passwordCleared.js
│  │  │  ├─ passwordSet.js
│  │  │  ├─ revealed.js
│  │  │  ├─ roomConfigSet.js
│  │  │  ├─ roomCreated.js
│  │  │  ├─ roomModifiers.js
│  │  │  ├─ sortOrderSet.js
│  │  │  ├─ storyAdded.js
│  │  │  ├─ storyChanged.js
│  │  │  ├─ storyDeleted.js
│  │  │  ├─ storyEstimateCleared.js
│  │  │  ├─ storyEstimateGiven.js
│  │  │  ├─ storyRestored.js
│  │  │  ├─ storySelected.js
│  │  │  ├─ storyTrashed.js
│  │  │  ├─ storyValueSet.js
│  │  │  ├─ tokenIssued.js
│  │  │  └─ usernameSet.js
│  │  ├─ getLogger.js
│  │  ├─ restApi
│  │  │  ├─ dtoMapper.js
│  │  │  └─ rest.js
│  │  ├─ roomSchema.js
│  │  ├─ server.js
│  │  ├─ settings.js
│  │  ├─ socketManager.js
│  │  ├─ socketRegistry.js
│  │  ├─ socketServer.js
│  │  ├─ store
│  │  │  ├─ inMemoryRoomsStore.js
│  │  │  ├─ persistentRoomsStore.js
│  │  │  └─ roomStoreFactory.js
│  │  ├─ uuid.js
│  │  └─ validation
│  │     ├─ customFormats.js
│  │     └─ schemaValidators.js
│  └─ test
│     ├─ .eslintrc
│     ├─ integration
│     │  ├─ commandProcessorPerformanceTest.js
│     │  ├─ commands
│     │  │  ├─ addStoryTest.js
│     │  │  ├─ changeStoryTest.js
│     │  │  ├─ clearStoryEstimateTest.js
│     │  │  ├─ deleteStoryTest.js
│     │  │  ├─ giveStoryEstimateTest.js
│     │  │  ├─ importStoriesTest.js
│     │  │  ├─ joinRoomTest.js
│     │  │  ├─ kickTest.js
│     │  │  ├─ leaveRoomTest.js
│     │  │  ├─ newEstimationRoundTest.js
│     │  │  ├─ restoreStoryTest.js
│     │  │  ├─ revealTest.js
│     │  │  ├─ selectStoryTest.js
│     │  │  ├─ setAvatarTest.js
│     │  │  ├─ setCardConfigTest.js
│     │  │  ├─ setEmailTest.js
│     │  │  ├─ setPasswordTest.js
│     │  │  ├─ setRoomConfigTest.js
│     │  │  ├─ setSortOrderTest.js
│     │  │  ├─ setStoryValueTest.js
│     │  │  ├─ settleEstimationTest.js
│     │  │  ├─ setUsernameTest.js
│     │  │  ├─ toggleExcludeTest.js
│     │  │  └─ trashStoryTest.js
│     │  └─ importAndExportStoriesTest.js
│     ├─ migrations
│     │  ├─ autoRevealOnTest.js
│     │  ├─ avatarToZeroTest.js
│     │  ├─ db.js
│     │  ├─ fixUsernameLengthTest.js
│     │  ├─ migrationTestUtil.js
│     │  ├─ removeInvalidUsersTest.js
│     │  ├─ removeUsersWithoutNameTest.js
│     │  ├─ storiesToArrayTest.js
│     │  ├─ truncateStoryTitleTest.js
│     │  └─ usersToArrayTest.js
│     ├─ system
│     │  ├─ eventReducerScenarioGenerators
│     │  │  ├─ backlogModifyingTest.js
│     │  │  ├─ disconnectAndKickTest.js
│     │  │  ├─ estimatingSettlingSettingTest.js
│     │  │  ├─ estimatingTest.js
│     │  │  ├─ includeAndExcludeTest.js
│     │  │  ├─ index.js
│     │  │  ├─ joinAndLeaveTest.js
│     │  │  ├─ resetAndClearPasswordTest.js
│     │  │  ├─ roomConfigTest.js
│     │  │  └─ youGetKickedTest.js
│     │  ├─ exportStoriesToJsonAndReImportTest.js
│     │  ├─ fakeDataPopulaterTest.js
│     │  ├─ persistentRoomsStoreTest.js
│     │  ├─ poinzSocketClient.js
│     │  ├─ restApiTest.js
│     │  ├─ serverPerformanceTest.js
│     │  ├─ systemTestUtils.js
│     │  └─ webSocketTest.js
│     ├─ testJiraIssueExport.csv
│     ├─ testJiraIssueExportConsensus.csv
│     ├─ testPoinzJsonExport.json
│     ├─ testUtils.js
│     └─ unit
│        ├─ auth
│        │  ├─ jwtServiceTest.js
│        │  └─ roomPasswordServiceTest.js
│        ├─ commandProcessorTest.js
│        ├─ generateSafeRandomHexStringTest.js
│        ├─ getLoggerTest.js
│        ├─ inMemoryRoomsStoreTest.js
│        ├─ parseCsvDataUrlToStoriesTest.js
│        ├─ parseJsonDataUrlToStoriesTest.js
│        ├─ restApi
│        │  └─ dtoMapperTest.js
│        ├─ setup.js
│        ├─ socketManagerTest.js
│        └─ validation
│           ├─ commandSchemaValidatorTest.js
│           └─ validateCardConfigTest.js
└─ setPkgVersion.mjs

```