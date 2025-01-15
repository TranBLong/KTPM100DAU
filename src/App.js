import React, { useState } from "react";
import "./App.css";

const questions = [
    //1
    {
      question: 'Given the following state transition table Which of the test cases below will cover the following series of state transitions? S1 SO S1 S2 SO',
      options: ['A. D, A, B, C.', 'B. A, B, C, D.', 'C. D, A, B.', 'D. A, B, C.'],
      answer: 'A. D, A, B, C.',
    },
    //2
    {
      question: 'From a Testing perspective, what are the MAIN purposes of Configuration Management?:\n i) Identifying the version of software under test.\n ii) Controlling the version of testware items.\n iii) Developing new testware items.\n iv) Tracking changes to testware items.\n v) Analysing the need for new testware items.',
      options: ['A. ii, iv and v.', 'B. ii, iii and iv.i,', 'C. i, ii and iv.', 'D. i, iii and v.'],
      answer: 'C. i, ii and iv.',
    },
    //3
    {
      question: 'Which of the following is a MAJOR task of test planning?',
      options: ['A. Scheduling test analysis and design tasks.', 'B. Initiating corrective actions.', 'C. Monitoring progress and test coverage.', 'D. Measuring and analyzing results.'],
      answer: 'A. Scheduling test analysis and design tasks.',
    },
    //4
    {
      question: 'Which of the following BEST describes the difference between an inspection and a walkthrough?',
      options: ['A. Both inspections and walkthroughs are led by the author.', 'B. An inspection is led by a moderator and a walkthrough is led by the author.', 'C. Both inspections and walkthroughs are led by a trained moderator.', 'D. A walkthrough is led by the author. The author is not present during inspections.'],
      answer: 'B. An inspection is led by a moderator and a walkthrough is led by the author.',
    },
    //5
    {
      question: 'Where may functional testing be performed?',
      options: ['A. At system and acceptance testing levels only.', 'B. At all test levels.', 'C. At all levels above integration testing.', 'D. At the acceptance testing level only.'],
      answer: 'B. At all test levels.',
    },
    //6
    {
      question: 'What is the MAIN objective when reviewing a software deliverable?',
      options: ['A. To identify potential application failures by use of a test specification.', 'B. To identify defects in any software work product.', 'C. To identify spelling mistakes in a requirements specification.', 'D. To identify standards inconsistencies in the code.'],
      answer: 'B. To identify defects in any software work product.',
    },
    //7
    {
      question: 'Who would USUALLY perform debugging activities?',
      options: ['A. Developers.', 'B. Analysts.', 'C. Testers.', 'D. Incident Managers.'],
      answer: 'A. Developers.',
    },
    //8
    {
      question: 'Which of the following would you NOT usually find on a software incident report?',
      options: ['A. The name and/or organisational position of the person raising the problem.', 'B. Version of the Software Under Test.', 'C. Suggestions as to how to fix the problem.', 'D. Actual and expected results.'],
      answer: 'C. Suggestions as to how to fix the problem.',
    },
    //9
    {
      question: 'Which of the following defines the expected results of a test?',
      options: ['A. Test case specification.', 'B. Test design specification.', 'C. Test procedure specification.', 'D. Test results.'],
      answer: 'A. Test case specification.',
    },
    //10
    {
      question: 'Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers\ni) Performance testing tools.\nii) Coverage measurement tools.\niii) Test comparators.\niv) Dynamic analysis tools.\nv) Incident management tools.',
      options: ['A. i, iii. and iv. are more for developers.', 'B. ii. and iv. are more for developers.', 'C. ii, iii. and iv. are more for developers.', 'D. ii. and iii. are more for developers.'],
      answer: 'B. ii. and iv. are more for developers.',
    },
    //11
    {
      question: 'Which of the following is correct?',
      options: ['A. Impact analysis assesses the effect on the system of a defect found in regression testing.', 'B. Impact analysis assesses the effect of a new person joining the regression test team.', 'C. Impact analysis assesses whether or not a defect found in regression testing has been fixed correctly.', 'D. Impact analysis assesses the effect of a change to the system to determine how much regression testing to do.'],
      answer: 'D. Impact analysis assesses the effect of a change to the system to determine how much regression testing to do.',
    },
    //12
    {
      question: 'As part of which test process do you determine the exit criteria?',
      options: ['A. Test planning.', 'B. Evaluating exit criteria and reporting.', 'C. Test closure.', 'D. Test control.'],
      answer: 'A. Test planning.',
    },
    //13
    {
      question: 'Given the following state transition diagram Which of the following series of state transitions contains an INVALID transition which may indicate a fault in the system design?',
      options: ['A. Login Browse Basket Checkout Basket Checkout Pay Logout.', 'B. Login Browse Basket Checkout Pay Logout.', 'C. Login Browse Basket Checkout Basket Logout.', 'D. Login Browse Basket Browse Basket Checkout Pay Logout.'],
      answer: 'C. Login Browse Basket Checkout Basket Logout.',
    },
    //14
    {
      question: 'Which of the following is a MAJOR task of test implementation and execution?',
      options: ['A. Measuring and analyzing results.', 'D. Assessing if more tests are needed.', 'C. Identifying test conditions or test requirements.', 'B. Reporting discrepancies as incidents.'],
      answer: 'B. Reporting discrepancies as incidents.',
    },
    //15
    {
      question: 'What is beta testing?',
      options: ['A. Testing performed by potential customers at the developers location.', 'D. Testing performed by product developers at their own locations.', 'C. Testing performed by product developers at the customers location.', 'B. Testing performed by potential customers at their own locations.'],
      answer: 'B. Testing performed by potential customers at their own locations.',
    },
    //16
    {
      question: 'Given the following fragment of code, how many tests are required for 100%decision coverage?\nif width > length\nthen\nbiggest_dimension = width\nif height > width\nthen\nbiggest_dimension = height\nend_if\nelse\nbiggest_dimension = length\nif height > length\nthen\nbiggest_dimension = height\nend_if\nend_if',
      options: ['A. 3', 'B. 4', 'C. 2', 'D. 1'],
      answer: 'B. 4',
    },
    //17
    {
      question: 'You have designed test cases to provide 100% statement and 100% decision coverage for the following fragment of code.\nif width > length\nthen\nbiggest_dimension = width\nelse\nbiggest_dimension = length\nend_if\nThe following has been added to the bottom of the code fragment above.\nprint "Biggest dimension is " & biggest_dimension\nprint "Width: " & width\nprint "Length: " & length\nHow many more test cases are required?',
      options: ['A. One more test case will be required for 100 % decision coverage.', 'B. Two more test cases will be required for 100 % statement coverage, one of which will be used to provide 100% decision coverage.', 'C. None, existing test cases can be used.', 'D. One more test case will be required for 100" statement coverage.'],
      answer: 'C. None, existing test cases can be used.',
    },
    //18
    {
      question: 'A thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the best values in degrees to cover all equivalence partitions?',
      options: ['A. 15, 19 and 25.', 'B. 17, 18 and19.', 'C. 18, 20 and22.', 'D. 16, 26 and 32.'],
      answer: 'A. 15, 19 and 25.',
    },
    //19
    {
      question: 'Which activity in the fundamental test process creates test suites for efficient test execution?',
      options: ['A. Implementation and execution.', 'B. Planning and control.', 'C. Analysis and design.', 'D. Test closure.'],
      answer: 'A. Implementation and execution.',
    },
    //20
    {
      question: 'Which of the following is TRUE?',
      options: ['A. Confirmation testing is testing fixes to a set of defects and Regression testing is testing to establish whether any defects have been introduced as a result of changes.', 'B. Confirmation testing is testing to establish whether any defects have been introduced as a result of changes and Regression testing is testing fixes to a set of defects.', 'C. Confirmation testing and Regression testing are both testing to establish whether any defects have been introduced as a result of changes.', 'D. Confirmation testing and Regression testing are both testing fixes to a set of defects.'],
      answer: 'A. Confirmation testing is testing fixes to a set of defects and Regression testing is testing to establish whether any defects have been introduced as a result of changes.',
    },
    //21
    {
      question: 'Given the following decision table: Which of the following test cases and expected results is VALID?',
      options: ['A. 23 year old in insurance class A Premium is 0 and excess is,500.', 'B. 51 year old in insurance class C Premium is 0 and excess is 00.', 'C. 31 year old in insurance class B Premium is 0 and excess is ,500.', 'D. 43 year old in insurance class C Premium is 0 and excess is ,000.'],
      answer: 'A. 23 year old in insurance class A Premium is 0 and excess is,500.',
    },
    //22
    {
      question: 'When should configuration management procedures be implemented?',
      options: ['A. During test planning.', 'B. During test analysis.', 'C. During test execution.', 'D. When evaluating exit criteria'],
      answer: 'A. During test planning.',
    },
    //23
    {
      question: ' Which of the following are characteristic of regression testing ?\ni) Regression testing is run ONLY once\nii) Regression testing is used after fixes have been made\niii) Regression testing is often automated\niv) Regression tests need not be maintained',
      options: ['A. ii, iv.', 'B. ii, iii.', 'C. i, iii, iv.', 'D. iii.'],
      answer: 'B. ii, iii.',
    },
    //24
    {
      question: 'A wholesaler sells printer cartridges. The minimum order quantity is 5. There is a 20% discount for orders of 100 or more printer cartridges. You have been asked to prepare test cases using various values for the number of cartridges ordered. Which of the following groups contain three test inputs that would  generated using Boundary Value Analysis?',
      options: ['A. 5, 6, 20', 'B. 4, 5, 80', 'C. 4, 5, 99', 'D. 1, 20, 100'],
      answer: 'C. 4, 5, 99',
    },
    //25
    {
      question: 'Which of the following activities should be performed during the selection and implementation of a testing tool?\ni) Investigate the organisations test process.\nii) Conduct a proof of concept.\niii) Implement the selected tool on a project behind schedule to save time.\niv) Identify coaching and mentoring requirements for the use of the selected tool.',
      options: ['A. i, ii, iii.', 'B. ii, iii, iv.', 'C. i, iii, iv.', 'D. i, ii, iv.'],
      answer: 'D. i, ii, iv.',
    },
    //26
    {
      question: 'What is the MAIN benefit of designing tests early in the life cycle?',
      options: ['A. It is cheaper than designing tests during the test phases.', 'B. It helps prevent defects from being introduced into the code.', 'C. Tests designed early are more effective than tests designed later.', 'D. It saves time during the testing phases when testers are busy'],
      answer: 'B. It helps prevent defects from being introduced into the code.',
    },
    //27
    {
      question: 'Which of the following benefits are MOST likely to be achieved by using test tools?\ni) Easy to access information about tests and testing.\nii) Reduced maintenance of testware.\niii) Easy and cheap to implement.\niv) Greater consistency of tests.',
      options: ['A. ii and iv', 'B. ii and iii', 'C. i and iv', 'D. i and iii'],
      answer: 'C. i and iv',
    },
    //28
    {
      question: 'What is the KEY difference between preventative and reactive approaches to testing?',
      options: ['A. Preventative tests and reactive tests are designed as early as possible.', 'B. Preventative tests are designed early; reactive tests are designed after the software has been produced.', 'C. Preventative testing is always analytical; reactive testing is always heuristic.', 'D. Preventative tests are designed after the software has been produced; reactive tests are designed early in response to review comments.'],
      answer: 'B. Preventative tests are designed early; reactive tests are designed after the software has been produced.',
    },
    //29
    {
      question: 'What is the purpose of exit criteria?',
      options: ['A. To define when a test level is complete.', 'B. To determine when a test has completed.', 'C. To identify when a software system should be retired.', 'D. To determine whether a test has passed.'],
      answer: 'A. To define when a test level is complete.',
    },
    //30
    {
      question: 'What determines the level of risk?',
      options: ['A. The cost of dealing with an adverse event if it occurs.', 'B. The probability that an adverse event will occur.', 'C. The amount of testing planned before release of a system.', 'D. The likelihood of an adverse event and the impact of the event.'],
      answer: 'D. The likelihood of an adverse event and the impact of the event.',
    },
    // Q. 31
  {
    question: 'With which of the following categories is a test comparator tool USUALLY associated?',
    options: [
      'A. Tool support for performance and monitoring.',
      'B. Tool support for static testing.',
      'C. Tool support for test execution and logging.',
      'D. Tool support for the management of testing and tests.'
    ],
    answer: 'C. Tool support for test execution and logging.',
  },

  // Q. 32
  {
    question: 'Which activities form part of test planning?\n i) Developing test cases.\n ii) Defining the overall approach to testing.\n iii) Assigning resources.\n iv) Building the test environment.\n v) Writing test conditions.',
    options: [
      'A. i, ii & iv are true, iii & v are false.',
      'B. ii & iii are true, i, iv & v are false.',
      'C. iv & v are true, i, ii & iii are false.',
      'D. i, ii & iii are true, iv & v are false.'
    ],
    answer: 'B. ii & iii are true, i, iv & v are false.',
  },
  // Q. 33
  {
    question: 'Match the following terms and statements.\n1. Decision Table Testing\n2. Decision Testing\n3. State Transition Testing\n4. Exploratory Testing\nW. Testing carried out with boxes to achieve specific test objectives, possibly to complement structured testing.\nX. A test technique used which may be used to verify different system re depending on current conditions or previous history.\nY. A test technique which combines combinations of inputs that might not otherwise have been exercised during testing.\nZ. A form of control flow testing based on decision outcomes.',
    options: [
      'A. 1Y, 2Z, 3X, 4W.',
      'B. 1X, 2W, 3Z, 4Y.',
      'C. 1Z, 2X, 3W, 4Y.',
      'D. 1Z, 2Y, 3X, 4W.'
    ],
    answer: 'A. 1Y, 2Z, 3X, 4W.',
  },

  // Q. 34
  {
    question: 'Which type of test design techniques does the following statement best describe: a procedure to derive test cases based on the specification of a component?',
    options: [
      'A. Black Box Techniques.',
      'B. White Box Techniques.',
      'C. Glass Box Techniques.',
      'D. Experience Based Techniques.'
    ],
    answer: 'A. Black Box Techniques.',
  },

  // Q. 35
  {
    question: 'For which of the following would a static analysis tool be MOST useful?',
    options: [
      'A. Supporting reviews.',
      'B. Validating models of the software.',
      'C. Testing code executed in a special test harness.',
      'D. Enforcement of coding standards.'
    ],
    answer: 'D. Enforcement of coding standards.',
  },

  // Q. 36
  {
    question: 'Which of the following types of defects is use case testing MOST LIKELY to uncover?\n i) Defects in the process flows during real-world use of the system.\n ii) Defects in the interface parameters in integration testing.\n iii) Integration defects caused by the interaction and interference of different components.\n iv) Defects in the system as it transitions between one state and another.',
    options: [
      'A. ii, iii.',
      'B. i, iii.',
      'C. iii, iv.',
      'D. i, ii.'
    ],
    answer: 'B. i, iii.',
  },
  // Q. 37
  {
    question: 'Which of the following is MOST important in the selection of a test approach?',
    options: [
      'A. Availability of tools to support the proposed techniques.',
      'B. The budget allowed for training in proposed techniques.',
      'C. Available skills and experience in the proposed techniques.',
      'D. The willingness of the test team to learn new techniques.'
    ],
    answer: 'C. Available skills and experience in the proposed techniques.',
  },

  // Q. 38
  {
    question: 'Which of the following is a benefit of test independence?',
    options: [
      'A. It does not require familiarity with the code.',
      'B. It is cheaper than using developers to test their own code.',
      'C. It avoids author bias in defining effective tests.',
      'D. Testers are better at finding defects than developers.'
    ],
    answer: 'C. It avoids author bias in defining effective tests.',
  },

  // Q. 39
  {
    question: 'The above diagram represents the following paths through the code.\nA. vwy\nB. vwz\nC. vxy\nD. vxz\nWhat is the MINIMUM combination of paths required to provide full statement coverage?',
    options: [
      'A. A',
      'B. ABD',
      'C. ABCD',
      'D. ACD'
    ],
    answer: 'A. A',
  },
  // Q. 40
  {
    question: 'Which of the following is MOST characteristic of specification based (black-box) techniques?',
    options: [
      'A. Test cases can be easily automated.',
      'B. Test cases are independent of each other.',
      'C. Test cases are derived systematically from models of the system.',
      'D. Test cases are derived systematically from the delivered code.'
    ],
    answer: 'C. Test cases are derived systematically from models of the system.',
  },

  // Q. 41
  {
    question: 'Which of the following combinations correctly describes a valid approach to component testing:\n i) Functional testing of the component in isolation.\n ii) Structure-based testing of the code without recording incidents.\n iii) Automated tests that are run until the component passes.\n iv) Functional testing of the interfaces between modules.',
    options: [
      'A. i and ii.',
      'B. i, ii and iii.',
      'C. iii.',
      'D. ii and iv.'
    ],
    answer: 'B. i, ii and iii.',
  },

  // Q. 42
  {
    question: 'Which of the following is a purpose of the review planning phase?',
    options: [
      'A. Log defects.',
      'B. Explain the documents to the participants.',
      'C. Gather metrics.',
      'D. Allocate the individual roles.'
    ],
    answer: 'D. Allocate the individual roles.',
  },

  // Q. 43
  {
    question: 'A defect arrival rate curve:',
    options: [
      'A. Shows the number of newly discovered defects per unit time.',
      'B. Shows the number of open defects per unit time.',
      'C. Shows the cumulative total number of defects found up to this time.',
      'D. Any of these, depending on the company.'
    ],
    answer: 'A. Shows the number of newly discovered defects per unit time.',
  },

  // Q. 44
  {
    question: 'Which is the best definition of complete testing:',
    options: [
      'A. You have discovered every bug in the program.',
      'B. You have tested every statement, branch, and combination of branches in the program.',
      'C. You have completed every test in the test plan.',
      'D. You have reached the scheduled ship date.'
    ],
    answer: 'A. You have discovered every bug in the program.',
  },
  // Q. 45
  {
    question: 'Complete statement and branch coverage means:',
    options: [
      'A. That you have tested every statement in the program.',
      'B. That you have tested every statement and every branch in the program.',
      'C. That you have tested every IF statement in the program.',
      'D. That you have tested every combination of values of IF statements in the program.'
    ],
    answer: 'B. That you have tested every statement and every branch in the program.',
  },

  // Q. 46
  {
    question: 'There are several risks of managing your project\'s schedule with a statistical reliability model. These include (choose one or more of the following):',
    options: [
      'A. Testers spend more energy early in the product trying to find bugs than preparing to do the rest of the project\'s work more efficiently.',
      'B. Managers might not realize that the testing effort is ineffective, late in the project, because they expect a low rate of bug finding, so the low rate achieved doesn\'t alarm them.',
      'C. It can increase the end-of-project pressure on testers to not find bugs, or to not report bugs.',
      'D. All of the above.'
    ],
    answer: 'D. All of the above.',
  },

  // Q. 47
  {
    question: 'Typical defects that are easier to find in reviews than in dynamic testing are:',
    options: [
      'A. Deviations from standards.',
      'B. Requirement defects.',
      'C. Design defects.',
      'D. Insufficient maintainability and incorrect interface specifications.',
      'E. All of the above.'
    ],
    answer: 'E. All of the above.',
  },

  // Q. 48
  {
    question: 'Reviews, static analysis and dynamic testing have the same objective:',
    options: [
      'A. Identifying defects.',
      'B. Fixing defects.',
      'C. A. and B.',
      'D. None of the above.'
    ],
    answer: 'A. Identifying defects.',
  },

  // Q. 49
  {
    question: 'We can achieve complete statement coverage but still miss bugs because:',
    options: [
      'A. The failure occurs only if you reach a statement taking the TRUE branch of an IF statement, and you got to the statement with a test that passed through the FALSE branch.',
      'B. The failure depends on the program\'s inability to handle specific data values, rather than on the program\'s flow of control.',
      'C. We are not required to test code that customers are unlikely to execute.',
      'D. All of the above.'
    ],
    answer: 'B. The failure depends on the program\'s inability to handle specific data values, rather than on the program\'s flow of control.',
  },
  // Q. 50
  {
    question: 'Measurement dysfunction is a problem because:',
    options: [
      'A. Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well.',
      'B. We don\'t know how to measure a variable (our measurement is dysfunctional) and so we don\'t know how to interpret the result.',
      'C. You are measuring the wrong thing and thus reaching the wrong conclusions.',
      'D. All of the above.'
    ],
    answer: 'A. Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well.',
  },
  // Q. 51
  {
    question:
      "Important consequences of the impossibility of complete testing are (Choose one or more answers):",
    options: [
      "A. We can never be certain that the program is bug free.",
      "B. We have no definite stopping point for testing, which makes it easier for some managers to argue for very little testing.",
      "C. We have no easy answer for what testing tasks should always be required, because every task takes time that could be spent on other high importance tasks.",
      "D. All of the above.",
    ],
    answer: "D. All of the above.",
  },

  // Q. 52
  {
    question: "Poor software characteristics are:",
    options: [
      "A. Only Project risks",
      "B. Only Product risks",
      "C. Project risks and Product risks",
      "D. Project risks or Product risks",
    ],
    answer: "B. Only Product risks",
  },

  // Q. 53
  {
    question: "System testing should investigate:",
    options: [
      "A. Non-functional requirements only not Functional requirements",
      "B. Functional requirements only not non-functional requirements",
      "C. Non-functional requirements and Functional requirements",
      "D. Non-functional requirements or Functional requirements",
    ],
    answer: "C. Non-functional requirements and Functional requirements",
  },

  // Q. 54
  {
    question: "Contract and regulation testing is a part of:",
    options: [
      "A. System testing",
      "B. Acceptance testing",
      "C. Integration testing",
      "D. Smoke testing",
    ],
    answer: "B. Acceptance testing",
  },

  // Q. 55
  {
    question: "Find the correct flow of the phases of a formal review:",
    options: [
      "A. Planning, Review meeting, Rework, Kick off",
      "B. Planning, Individual preparation, Kick off, Rework",
      "C. Planning, Review meeting, Rework, Follow up",
      "D. Planning, Individual preparation, Follow up, Kick off",
    ],
    answer: "C. Planning, Review meeting, Rework, Follow up",
  },

  // Q. 56
  {
    question: "Which is not the testing objectives:",
    options: [
      "A. Finding defects",
      "B. Gaining confidence about the level of quality and providing information",
      "C. Preventing defects.",
      "D. Debugging defects",
    ],
    answer: "D. Debugging defects",
  },

  // Q. 57
  {
    question:
      "Maintenance releases and technical assistance centers are examples of which of the following costs of quality?",
    options: [
      "A. External failure",
      "B. Internal failure",
      "C. Appraisal",
      "D. Prevention",
    ],
    answer: "A. External failure",
  },

  // Q. 58
  {
    question: "Which is not the project risks:",
    options: [
      "A. Supplier issues",
      "B. Organization factors",
      "C. Technical issues",
      "D. Error-prone software delivered",
    ],
    answer: "D. Error-prone software delivered",
  },

  // Q. 59
  {
    question: "Bug life cycle:",
    options: [
      "A. Open, Assigned, Fixed, Closed",
      "B. Open, Fixed, Assigned, Closed",
      "C. Assigned, Open, Closed, Fixed",
      "D. Assigned, Open, Fixed, Closed",
    ],
    answer: "A. Open, Assigned, Fixed, Closed",
  },

  // Q. 60
  {
    question:
      "Who is responsible for document all the issues, problems and open point that were identified during the review meeting:",
    options: ["A. Moderator", "B. Scribe", "C. Reviewers", "D. Author"],
    answer: "B. Scribe",
  },
  // Q. 61
  {
    question:
      "‘X’ has given a data on a person age, which should be between 1 to 99. Using BVA which is the appropriate one:",
    options: [
      "A. 0,1,2,99",
      "B. 1, 99, 100, 98",
      "C. 0, 1, 99, 100",
      "D. –1, 0, 1, 99",
    ],
    answer: "C. 0, 1, 99, 100",
  },

  // Q. 62
  {
    question: "Which is not a testing principle:",
    options: [
      "A. Early testing",
      "B. Defect clustering",
      "C. Pesticide paradox",
      "D. Exhaustive testing",
    ],
    answer: "D. Exhaustive testing",
  },

  // Q. 63
  {
    question:
      "A project that is in the implementation phase is six weeks behind schedule.\n The delivery date for the product is four months away. The project is not allowed to slip the delivery date or compromise on the quality standards established for his product. Which of the following actions would bring this project back on schedule?",
    options: [
      "A. Eliminate some of the requirements that have not yet been implemented.",
      "B. Add more engineers to the project to make up for lost work.",
      "C. Ask the current developers to work overtime until the lost work is recovered.",
      "D. Hire more software quality assurance personnel.",
    ],
    answer:
      "A. Eliminate some of the requirements that have not yet been implemented.",
  },

  // Q. 64
  {
    question:
      "The ___________ Testing will be performed by the people at client own locations:",
    options: [
      "A. Alpha testing",
      "B. Field testing",
      "C. Performance testing",
      "D. System testing",
    ],
    answer: "B. Field testing",
  },

  // Q. 65
  {
    question:
      "Which of the following is the standard for the Software product quality:",
    options: ["A. ISO 1926", "B. ISO 829", "C. ISO 1012", "D. ISO 1028"],
    answer: "A. ISO 1926",
  },

  // Q. 66
  {
    question: "Which is not a black box testing technique:",
    options: [
      "A. Equivalence partition",
      "B. Decision tables",
      "C. Transaction diagrams",
      "D. Decision testing",
    ],
    answer: "D. Decision testing",
  },

  // Q. 67
  {
    question: "Find the mismatch:",
    options: [
      "A. Test data preparation tools – Manipulate Data bases",
      "B. Test design tools – Generate test inputs",
      "C. Requirement management tools – Enables individual tests to be traceable",
      "D. Configuration management tools – Check for consistence",
    ],
    answer: "D. Configuration management tools – Check for consistence",
  },

  // Q. 68
  {
    question: "Use cases can be performed to test:",
    options: [
      "A. Performance testing",
      "B. Unit testing",
      "C. Business scenarios",
      "D. Static testing",
    ],
    answer: "C. Business scenarios",
  },

  // Q. 69
  {
    question: "Purpose of test design technique is:",
    options: [
      "A. Identifying test conditions only, not Identifying test cases",
      "B. Not Identifying test conditions, Identifying test cases only",
      "C. Identifying test conditions and Identifying test cases",
      "D. Identifying test conditions or Identifying test cases",
    ],
    answer: "C. Identifying test conditions and Identifying test cases",
  },

  // Q. 70
  {
    question:
      "One person has been dominating the current software process improvement meeting. Which of the following techniques should the facilitator use to bring other team members into the discussion?",
    options: [
      "A. Confront the person and ask that other team members be allowed to express their opinions.",
      "B. Wait for the person to pause, acknowledge the person’s opinion, and ask for someone else’s opinion.",
      "C. Switch the topic to an issue about which the person does not have a strong opinion.",
      "D. Express an opinion that differs from the person’s opinion in order to encourage others to express their ideas.",
    ],
    answer:
      "B. Wait for the person to pause, acknowledge the person’s opinion, and ask for someone else’s opinion.",
  },
  // Q. 71
  {
    question:
      "Stochastic testing using statistical information or operational profiles uses the following method:",
    options: [
      "A. Heuristic testing approach",
      "B. Methodical testing approach",
      "C. Model based testing approach",
      "D. Process or standard compliant testing approach",
    ],
    answer: "C. Model based testing approach",
  },

  // Q. 72
  {
    question: "A software model that can’t be used in functional testing:",
    options: [
      "A. Process flow model",
      "B. State transaction model",
      "C. Menu structure model",
      "D. Plain language specification model",
    ],
    answer: "C. Menu structure model",
  },

  // Q. 73
  {
    question: "Arc testing is known as:",
    options: [
      "A. Branch testing",
      "B. Agile testing",
      "C. Beta testing",
      "D. Ad-hoc testing",
    ],
    answer: "A. Branch testing",
  },

  // Q. 74
  {
    question: "The purpose of exit criteria is:",
    options: [
      "A. Define when to stop testing",
      "B. End of test level",
      "C. When a set of tests has achieved a specific pre condition",
      "D. All of the above",
    ],
    answer: "D. All of the above",
  },

  // Q. 75
  {
    question:
      "The ___________ technique can be used to achieve input and output coverage:",
    options: [
      "A. Boundary value analysis",
      "B. Equivalence partitioning",
      "C. Decision table testing",
      "D. State transition testing",
    ],
    answer: "B. Equivalence partitioning",
  },

  // Q. 76
  {
    question:
      "The __________ testing is performed at the developing organization’s site:",
    options: [
      "A. Unit testing",
      "B. Regression testing",
      "C. Alpha testing",
      "D. Integration testing",
    ],
    answer: "C. Alpha testing",
  },

  // Q. 77
  {
    question: "What is the main purpose of Informal review:",
    options: [
      "A. Inexpensive way to get some benefit",
      "B. Find defects",
      "C. Learning, gaining understanding, effect finding",
      "D. Discuss, make decisions, solve technical problems",
    ],
    answer: "A. Inexpensive way to get some benefit",
  },

  // Q. 78
  {
    question: "Which is not a Component testing:",
    options: [
      "A. Check the memory leaks",
      "B. Check the robustness",
      "C. Check the branch coverage",
      "D. Check the decision tables",
    ],
    answer: "D. Check the decision tables",
  },

  // Q. 79
  {
    question: "The software engineer's role in tool selection is:",
    options: [
      "A. To identify, evaluate, and rank tools, and recommend tools to management",
      "B. To determine what kind of tool is needed, then find it and buy it",
      "C. To initiate the tool search and present a case to management",
      "D. To identify, evaluate and select the tools",
    ],
    answer:
      "A. To identify, evaluate, and rank tools, and recommend tools to management",
  },

  // Q. 80
  {
    question: "Which is not the fundamental test process:",
    options: [
      "A. Planning and control",
      "B. Test closure activities",
      "C. Analysis and design",
      "D. None",
    ],
    answer: "D. None",
  },
  // Q. 81
  {
    question:
      "The ________ and ________ are used within individual workbenches to produce the right output products:",
    options: [
      "A. Tools and techniques",
      "B. Procedures and standards",
      "C. Processes and walkthroughs",
      "D. Reviews and update",
    ],
    answer: "B. Procedures and standards",
  },

  // Q. 82
  {
    question: "Which is not the software characteristics:",
    options: [
      "A. Reliability",
      "B. Usability",
      "C. Scalability",
      "D. Maintainability",
    ],
    answer: "C. Scalability",
  },

  // Q. 83
  {
    question:
      "The principle of Cyclomatic complexity, considering L as edges or links, N as nodes, P as independent paths:",
    options: ["A. L-N +2P", "B. N-L +2P", "C. N-L +P", "D. N-L +P"],
    answer: "A. L-N +2P",
  },

  // Q. 84
  {
    question: "FPA is used to:",
    options: [
      "A. To measure the functional requirements of the project",
      "B. To measure the size of the functionality of an Information system",
      "C. To measure the functional testing effort",
      "D. To measure the functional flow",
    ],
    answer:
      "B. To measure the size of the functionality of an Information system",
  },

  // Q. 85
  {
    question:
      "A _____ is the step-by-step method followed to ensure that standards are met:",
    options: ["A. SDLC", "B. Project Plan", "C. Policy", "D. Procedure"],
    answer: "D. Procedure",
  },

  // Q. 86
  {
    question: "Which is not a test Oracle:",
    options: [
      "A. The existing system (For a bench mark)",
      "B. The code",
      "C. Individual’s knowledge",
      "D. User manual",
    ],
    answer: "B. The code",
  },

  // Q. 87
  {
    question: "PDCA is known as:",
    options: [
      "A. Plan, Do, Check, Act",
      "B. Plan, Do, Correct, Act",
      "C. Plan, Debug, Check, Act",
      "D. Plan, Do, Check, Accept",
    ],
    answer: "A. Plan, Do, Check, Act",
  },

  // Q. 88
  {
    question: "Which is the non-functional testing:",
    options: [
      "A. Performance testing",
      "B. Unit testing",
      "C. Regression testing",
      "D. Sanity testing",
    ],
    answer: "A. Performance testing",
  },

  // Q. 89
  {
    question:
      "A Test Plan Outline contains which of the following:\ni. Test Items\nii. Test Scripts\niii. Test Deliverables\niv. Responsibilities",
    options: [
      "A. i,ii,iii are true and iv is false",
      "B. i,iii,iv are true and ii is false",
      "C. ii,iii are true and i and iv are false",
      "D. i,ii are false and iii , iv are true",
    ],
    answer: "B. i,iii,iv are true and ii is false",
  },

  // Q. 90
  {
    question:
      "Testing where in we subject the target of the test , to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads:",
    options: [
      "A. Load Testing",
      "B. Integration Testing",
      "C. System Testing",
      "D. Usability Testing",
    ],
    answer: "A. Load Testing",
  },
  // Q. 91
  {
    question:
      "Which of the following is the task of a Tester?\ni. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project.\nii. Prepare and acquire Test Data\niii. Implement Tests on all test levels, execute and log the tests.\niv. Create the Test Specifications",
    options: [
      "A. i, ii, iii is true and iv is false",
      "B. ii,iii,iv is true and i is false",
      "C. i is true and ii,iii,iv are false",
      "D. iii and iv is correct and i and ii are incorrect",
    ],
    answer: "B. ii,iii,iv is true and i is false",
  },

  // Q. 92
  {
    question: "What can static analysis NOT find?",
    options: [
      "A. The use of a variable before it has been defined",
      'B. Unreachable ("dead") code',
      "C. Memory leaks",
      "D. Array bound violations",
    ],
    answer: "C. Memory leaks",
  },

  // Q. 93
  {
    question: "White Box Techniques are also called as:",
    options: [
      "A. Structural Testing",
      "B. Design Based Testing",
      "C. Error Guessing Technique",
      "D. Experience Based Technique",
    ],
    answer: "A. Structural Testing",
  },

  // Q. 94
  {
    question: "Reviewing the test Basis is a part of which phase:",
    options: [
      "A. Test Analysis and Design",
      "B. Test Implementation and execution",
      "C. Test Closure Activities",
      "D. Evaluating exit criteria and reporting",
    ],
    answer: "A. Test Analysis and Design",
  },

  // Q. 95
  {
    question:
      "Component Testing is also called as :-\ni. Unit Testing\nii. Program Testing\niii. Module Testing\niv. System Component Testing",
    options: [
      "A. i,ii,iii are true and iv is false",
      "B. i,ii,iii,iv are false",
      "C. i,ii,iv are true and iii is false",
      "D. all of above is true",
    ],
    answer: "A. i,ii,iii are true and iv is false",
  },

  // Q. 96
  {
    question: "Which of the following is not a major task of Exit criteria?",
    options: [
      "A. Checking test logs against the exit criteria specified in test planning.",
      "B. Logging the outcome of test execution.",
      "C. Assessing if more tests are needed.",
      "D. Writing a test summary report for stakeholders.",
    ],
    answer: "B. Logging the outcome of test execution.",
  },

  // Q. 97
  {
    question:
      "Which of the following is true about Formal Review or Inspection:-\ni. Led by Trained Moderator (not the author).\nii. No Pre Meeting Preparations\niii. Formal Follow up process.\niv. Main Objective is to find defects",
    options: [
      "A. ii is true and i,iii,iv are false",
      "B. i,iii,iv are true and ii is false",
      "C. i,iii,iv are false and ii is true",
      "D. iii is true and i,ii,iv are false",
    ],
    answer: "B. i,iii,iv are true and ii is false",
  },

  // Q. 98
  {
    question:
      "The Phases of formal review process is mentioned below arrange them in the correct order.\ni. Planning\nii. Review Meeting\niii. Rework\niv. Individual Preparations\nv. Kick Off\nvi. Follow Up",
    options: [
      "A. i,ii,iii,iv,v,vi",
      "B. vi,i,ii,iii,iv,v",
      "C. i,v,iv,ii,iii,vi",
      "D. i,ii,iii,v,iv,vi",
    ],
    answer: "C. i,v,iv,ii,iii,vi",
  },

  // Q. 99
  {
    question:
      "Testing activity which is performed to expose defects in the interfaces and in the interaction between integrated components is:",
    options: [
      "A. System Level Testing",
      "B. Integration Level Testing",
      "C. Unit Level Testing",
      "D. Component Testing",
    ],
    answer: "B. Integration Level Testing",
  },

  // Q. 100
  {
    question: "Methodologies adopted while performing Maintenance Testing:-",
    options: [
      "A. Breadth Test and Depth Test",
      "B. Re-testing",
      "C. Confirmation Testing",
      "D. Sanity Testing",
    ],
    answer: "A. Breadth Test and Depth Test",
  },
  // //101
  // {
  //   question:
  //     "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalance values which belong to the same class.",
  //   options: ["A. 12,16,22", "B. 24,27,17", "C. 22,23,24", "D. 14,15,19"],
  //   answer: "C. 22,23,24",
  // },
  // //102
  // {
  //   question:
  //     "What is an equivalence partition (also known as an equivalence class)?",
  //   options: [
  //     "A. A set of test cases for testing classes of objects",
  //     "B. An input or output range of values such that only one value in the range becomes a test case",
  //     "C. An input or output range of values such that each value in the range becomes a test case",
  //     "D. An input or output range of values such that every tenth value in the range becomes a test case.",
  //   ],
  //   answer:
  //     "B. An input or output range of values such that only one value in the range becomes a test case",
  // },
  // //103
  // {
  //   question:
  //     "Which of the following is not a part of the Test Implementation and Execution Phase",
  //   options: [
  //     "A. Creating test suites from the test cases",
  //     "B. Executing test cases either manually or by using test execution tools",
  //     "C. Comparing actual results",
  //     "D. Designing the Tests",
  //   ],
  //   answer: "D. Designing the Tests",
  // },
  // //104
  // {
  //   question: "Link Testing is also called as:",
  //   options: [
  //     "A. Component Integration testing",
  //     "B. Component System Testing",
  //     "C. Component Sub System Testing",
  //     "D. Maintenance testing",
  //   ],
  //   answer: "A. Component Integration testing",
  // },
  // //105
  // {
  //   question:
  //     "Who are the persons involved in a Formal Review :-\ni. Manager\nii. Moderator\niii. Scribe / Recorder\niv. Assistant Manager",
  //   options: [
  //     "A. i,ii,iii,iv are true",
  //     "B. i,ii,iii are true and iv is false.",
  //     "C. ii,iii,iv are true and i is false.",
  //     "D. i,iv are true and ii, iii are false.",
  //   ],
  //   answer: "B. i,ii,iii are true and iv is false.",
  // },
  // //106
  // {
  //   question:
  //     "Which of the following statements regarding static testing is false:",
  //   options: [
  //     "A. Static testing requires the running of tests through the code",
  //     "B. Static testing includes desk checking",
  //     "C. Static testing includes techniques such as reviews and inspections",
  //     "D. Static testing can give measurements such as cyclomatic complexity",
  //   ],
  //   answer: "A. Static testing requires the running of tests through the code",
  // },
  // //107
  // {
  //   question:
  //     "Designing the test environment set-up and identifying any required infrastructure and tools are a part of which phase",
  //   options: [
  //     "A. Test Implementation and execution",
  //     "B. Test Analysis and Design",
  //     "C. Evaluating the Exit Criteria and reporting",
  //     "D. Test Closure Activities",
  //   ],
  //   answer: "B. Test Analysis and Design",
  // },
  // //108
  // {
  //   question:
  //     "A Type of functional Testing, which investigates the functions relating to detection of threats, such as virus from malicious outsiders.",
  //   options: [
  //     "A. Security Testing",
  //     "B. Recovery Testing",
  //     "C. Performance Testing",
  //     "D. Functionality Testing",
  //   ],
  //   answer: "A. Security Testing",
  // },
  // //109
  // {
  //   question:
  //     "A Person who documents all the issues, problems and open points that were identified during a formal review.",
  //   options: ["A. Moderator.", "B. Scribe", "C. Author", "D. Manager"],
  //   answer: "B. Scribe",
  // },
  // //110
  // {
  //   question:
  //     "The Test Cases Derived from use cases",
  //   options: [
  //     "A. Are most useful in uncovering defects in the process flows during real world use of the system",
  //     "B. Are most useful in uncovering defects in the process flows during the testing use of the system",
  //     "C. Are most useful in covering the defects in the process flows during real world use of the system",
  //     "D. Are most useful in covering the defects at the Integration Level",
  //   ],
  //   answer:
  //     "A. Are most useful in uncovering defects in the process flows during real world use of the system",
  // },
  // //111
  // {
  //   question:
  //     "One of the fields on a form contains a text box which accepts alpha numeric values. Identify the Valid Equivalence class",
  //   options: ["A. BOOK", "B. Book", "C. Boo01k", "D. book"],
  //   answer: "C. Boo01k",
  // },
  // //112
  // {
  //   question:
  //     "In a Examination a candidate has to score minimum of 24 marks inorder to clear the exam. The maximum that he can score is 40 marks. Identify the Valid Equivalance values if the student clears the exam.",
  //   options: ["A. 22,23,26", "B. 21,39,40", "C. 29,30,31", "D. 0,15,22"],
  //   answer: "C. 29,30,31",
  // },
  // //113
  // {
  //   question:
  //     "Verification involves which of the following :-\ni. Helps to check the Quality of the built product\nii. Helps to check that we have built the right product.\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness.",
  //   options: [
  //     "A. Options i,ii,iii,iv are true.",
  //     "B. i is true and ii,iii,iv are false",
  //     "C. i,ii,iii are true and iv is false",
  //     "D. ii is true and i,iii,iv are false.",
  //   ],
  //   answer: "B. i is true and ii,iii,iv are false",
  // },
  // //114
  // {
  //   question: "A Project risk includes which of the following :",
  //   options: [
  //     "A. Organizational Factors",
  //     "B. Poor Software characteristics",
  //     "C. Error Prone software delivered.",
  //     "D. Software that does not perform its intended functions",
  //   ],
  //   answer: "A. Organizational Factors",
  // },
  // //115
  // {
  //   question: "Which of the following is a Key Characteristics of Walk Through",
  //   options: [
  //     "A. Scenario , Dry Run , Peer Group",
  //     "B. Pre Meeting Preparations",
  //     "C. Formal Follow Up Process",
  //     "D. Includes Metrics",
  //   ],
  //   answer: "A. Scenario , Dry Run , Peer Group",
  // },
  // //116
  // {
  //   question: "Which of the following techniques is NOT a White box technique?",
  //   options: [
  //     "A. Statement Testing and coverage",
  //     "B. Decision Testing and coverage",
  //     "C. Condition Coverage",
  //     "D. Boundary value analysis",
  //   ],
  //   answer: "D. Boundary value analysis",
  // },
  // //117
  // {
  //   question:
  //     "Reporting Discrepancies as incidents is a part of which phase :-",
  //   options: [
  //     "A. Test Analysis and Design",
  //     "B. Test Implementation and execution",
  //     "C. Test Closure Activities",
  //     "D. Evaluating exit criteria and reporting",
  //   ],
  //   answer: "B. Test Implementation and execution",
  // },
  // //118
  // {
  //   question:
  //     "In a risk-based approach the risks identified may be used to :\ni. Determine the test technique to be employed\nii. Determine the extent of testing to be carried out\niii. Prioritize testing in an attempt to find critical defects as early as possible.\niv. Determine the cost of the project",
  //   options: [
  //     "A. ii is True; i, iii, iv & v are False",
  //     "B. i,ii,iii are true and iv is false",
  //     "C. ii & iii are True; i, iv are False",
  //     "D. ii, iii & iv are True; i is false",
  //   ],
  //   answer: "B. i,ii,iii are true and iv is false",
  // },
  // //119
  // {
  //   question: "Incidents would not be raised against:",
  //   options: [
  //     "A. Requirements",
  //     "B. Documentation",
  //     "C. Test cases",
  //     "D. Improvements suggested by users",
  //   ],
  //   answer: "D. Improvements suggested by users",
  // },
  // //120
  // {
  //   question: "The Planning phase of a formal review includes the following :-",
  //   options: [
  //     "A. Explaining the objectives",
  //     "B. Selecting the personnel, allocating roles.",
  //     "C. Follow up",
  //     "D. Individual Meeting preparations",
  //   ],
  //   answer: "B. Selecting the personnel, allocating roles.",
  // },
  // //121
  // {
  //   question:
  //     "Test Implementation and execution has which of the following major tasks?\ni. Developing and prioritizing test cases, creating test data, writing test procedures and optionally preparing the test harnesses and writing automated test scripts.\nii. Creating the test suite from the test cases for efficient test execution.\niii. Verifying that the test environment has been set up correctly.\niv. Determining the exit criteria.",
  //   options: [
  //     "A. i,ii,iii are true and iv is false",
  //     "B. i,,iv are true and ii is false",
  //     "C. i,ii are true and iii,iv are false",
  //     "D. ii,iii,iv are true and i is false",
  //   ],
  //   answer: "A. i,ii,iii are true and iv is false",
  // },
  // //122
  // {
  //   question:
  //     "One of the fields on a form contains a text box which accepts numeric values in the range of 18 to 25. Identify the invalid Equivalance class",
  //   options: ["A. 17", "B. 19", "C. 24", "D. 21"],
  //   answer: "A. 17",
  // },
  // //123
  // {
  //   question: "Exhaustive Testing is",
  //   options: [
  //     "A. Is impractical but possible",
  //     "B. Is practically possible",
  //     "C. Is impractical and impossible",
  //     "D. Is always possible",
  //   ],
  //   answer: "A. Is impractical but possible",
  // },
  // //124
  // {
  //   question: "Hand over of Testware is a part of which Phase",
  //   options: [
  //     "A. Test Analysis and Design",
  //     "B. Test Planning and control",
  //     "C. Test Closure Activities",
  //     "D. Evaluating exit criteria and reporting",
  //   ],
  //   answer: "C. Test Closure Activities",
  // },
  // //125
  // {
  //   question: "Which one is not comes under international standard",
  //   options: ["A. IEC", "B. IEEE", "C. ISO", "D. All of the above"],
  //   answer: "B. IEEE",
  // },
  // //126
  // {
  //   question: "In which phase static tests are used",
  //   options: [
  //     "A. Requirements",
  //     "B. Design",
  //     "C. Coding",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //127
  // {
  //   question: "What's the disadvantage of Black Box Testing",
  //   options: [
  //     "A. Chances of having repetition of tests that are already done by programmer.",
  //     "B. The test inputs needs to be from large sample space.",
  //     "C. It is difficult to identify all possible inputs in limited testing time. So writing test cases is slow and difficult",
  //     "D. All above",
  //   ],
  //   answer: "D. All above",
  // },
  // //128
  // {
  //   question: "Static analysis tools are typically used by",
  //   options: [
  //     "A. Testers",
  //     "B. Developers",
  //     "C. Testers & Developers",
  //     "D. None",
  //   ],
  //   answer: "B. Developers",
  // },
  // //129
  // {
  //   question: "Majority of system errors occur in the _________ phase",
  //   options: [
  //     "A. Requirements Phase.",
  //     "B. Analysis and Design Phase",
  //     "C. Development Phase",
  //     "D. Testing Phase",
  //   ],
  //   answer: "A. Requirements Phase.",
  // },
  // //130
  // {
  //   question:
  //     "The specification which describes steps required to operate the system and exercise test cases in order to implement the associated test design",
  //   options: [
  //     "A. Test Case Specification",
  //     "B. Test Design Specification",
  //     "C. Test Procedure Specification",
  //     "D. None",
  //   ],
  //   answer: "C. Test Procedure Specification",
  // },
  // //131
  // {
  //   question:
  //     "How much percentage of the life cycle costs of a software are spent on maintenance.",
  //   options: ["A. 10%", "B. 30%", "C. 50%", "D. 70%"],
  //   answer: "D. 70%",
  // },
  // //132
  // {
  //   question:
  //     "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
  //   options: [
  //     "A. Regression testing",
  //     "B. Maintenance testing",
  //     "C. Confirmation testing",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Confirmation testing",
  // },
  // //133
  // {
  //   question:
  //     "Equivalence testing divides the input domain into classes of data from which test cases can be derived to reduce the total number of test cases that must be developed.",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //134
  // {
  //   question: "When to stop Testing?",
  //   options: [
  //     "A. Stop when scheduled time for testing expires",
  //     "B. Stop if 75% of the pre-defined number of errors is detected.",
  //     "C. Stop when all the test cases execute with detecting few errors.",
  //     "D. None above",
  //   ],
  //   answer: "A. Stop when scheduled time for testing expires",
  // },
  // //135
  // {
  //   question:
  //     "With thorough testing it is possible to remove all defects from a program prior to delivery to the customer.",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //136
  // {
  //   question: "Structure is unknown for which type of development project",
  //   options: [
  //     "A. Traditional system development",
  //     "B. Iterative development",
  //     "C. System maintenance",
  //     "D. Purchased/contracted software",
  //   ],
  //   answer: "D. Purchased/contracted software",
  // },
  // //137
  // {
  //   question:
  //     "________ indicates how important it is to fix the bug and when it should be fixed",
  //   options: [
  //     "A. Severity",
  //     "B. Priority",
  //     "C. All of the above",
  //     "D. None of the above",
  //   ],
  //   answer: "C. All of the above",
  // },
  // //138
  // {
  //   question:
  //     "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
  //   options: ["A. Reviewer", "B. Author", "C. Moderator", "D. Auditor"],
  //   answer: "C. Moderator",
  // },
  // //139
  // {
  //   question:
  //     "Performs sufficient testing to evaluate every possible path and condition in the application system. The only test method that guarantees the proper functioning of the application system is called as _____________",
  //   options: [
  //     "A. Regression Testing",
  //     "B. Exhaustive Testing",
  //     "C. Basic Path Testing",
  //     "D. Branch Testing",
  //   ],
  //   answer: "C. Basic Path Testing",
  // },
  // //140
  // {
  //   question:
  //     "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //141
  // {
  //   question:
  //     "A formal assessment of a work product conducted by one or more qualified independent reviewer to detect defects.",
  //   options: [
  //     "A. Inspection.",
  //     "B. Walkthrough.",
  //     "C. Review",
  //     "D. Non Conformance",
  //   ],
  //   answer: "A. Inspection.",
  // },
  // //142
  // {
  //   question:
  //     "Test Case are grouped into Manageable (and scheduled) units are called as",
  //   options: [
  //     "A. Test Harness",
  //     "B. Test Suite",
  //     "C. Test Cycle",
  //     "D. Test Driver",
  //   ],
  //   answer: "B. Test Suite",
  // },
  // //143
  // {
  //   question:
  //     "Configuration and compatibility testing are typically good choices for outsourcing",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //144
  // {
  //   question: "What type of tools to be used for Regression Testing",
  //   options: ["A. Performance", "B. Record/Playback", "C. A. & B.", "D. None"],
  //   answer: "B. Record/Playback",
  // },
  // //145
  // {
  //   question: "System Integration testing should be done after",
  //   options: [
  //     "A. Integration testing",
  //     "B. System testing",
  //     "C. Unit testing",
  //     "D. Component integration testing",
  //   ],
  //   answer: "C. Unit testing",
  // },
  // //146
  // {
  //   question:
  //     "During this event the entire system is tested to verify that all functional information structural and quality requirements have been met. A predetermined combination of tests is designed that when executed successfully satisfy management that the system meets specifications",
  //   options: [
  //     "A. Validation Testing",
  //     "B. Integration Testing",
  //     "C. User Acceptance Testing",
  //     "D. System Testing",
  //   ],
  //   answer: "C. User Acceptance Testing",
  // },
  // //147
  // {
  //   question:
  //     "What is the normal order of activities in which software testing is organized?",
  //   options: [
  //     "A. Unit, integration, system, validation",
  //     "B. System, integration, unit, validation",
  //     "C. Unit, integration, validation, system",
  //     "D. None of the above",
  //   ],
  //   answer: "A. Unit, integration, system, validation",
  // },
  // //148
  // {
  //   question:
  //     "The goal of a software tester is to find bugs, find them as early as possible and make sure they get fixed.",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //149
  // {
  //   question:
  //     "Beta testing is performed at developing organization's site where as Alpha testing is performed by people at their own locations.",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //150
  // {
  //   question: "The principal attributes of tools and automation are",
  //   options: [
  //     "A. Speed & efficiency",
  //     "B. Accuracy & precision",
  //     "C. All of the above",
  //     "D. None of the above",
  //   ],
  //   answer: "C. All of the above",
  // },
  // //151
  // {
  //   question:
  //     "In ______ testing doesn't know anything about the software being tested; it just clicks or types randomly.",
  //   options: [
  //     "A. Random testing",
  //     "B. Gorilla testing",
  //     "C. Adhoc testing",
  //     "D. Dumb monkey testing",
  //   ],
  //   answer: "D. Dumb monkey testing",
  // },
  // //152
  // {
  //   question:
  //     "A series of probing questions about the completeness and attributes of an application system is called",
  //   options: [
  //     "A. Checklist",
  //     "B. Checkpoint review",
  //     "C. Decision table",
  //     "D. Decision tree",
  //   ],
  //   answer: "A. Checklist",
  // },
  // //153
  // {
  //   question:
  //     "The testing technique that requires devising test cases to demonstrate that each program function is operational is called",
  //   options: [
  //     "A. Black-box testing",
  //     "B. Glass-box testing",
  //     "C. Grey-box testing",
  //     "D. White-box testing",
  //   ],
  //   answer: "C. Grey-box testing",
  // },
  // //154
  // {
  //   question:
  //     "A white box testing technique that measures the number of or percentage of decision directions executed by the test case designed is called",
  //   options: [
  //     "A. Condition coverage",
  //     "B. Decision/Condition coverage",
  //     "C. Decision Coverage",
  //     "D. Branch coverage",
  //   ],
  //   answer: "B. Decision/Condition coverage",
  // },
  // //155
  // {
  //   question:
  //     "Which summarizes the testing activities associated with one or more test design specifications.",
  //   options: [
  //     "A. Test Summary report",
  //     "B. Test Log",
  //     "C. Test Incident Report",
  //     "D. Test Script",
  //   ],
  //   answer: "C. Test Incident Report",
  // },
  // //156
  // {
  //   question: "Testing with out a real plan and test cases is called ---",
  //   options: [
  //     "A. Gorilla testing",
  //     "B. Monkey testing",
  //     "C. Adhoc testing",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //157
  // {
  //   question: "Which rule should not be followed for reviews",
  //   options: [
  //     "A. Defects and issues are identified and corrected",
  //     "B. The product is reviewed not the producer",
  //     "C. All members of the reviewing team are responsible for the result of the review",
  //     "D. Each review has a clear predefined objective",
  //   ],
  //   answer:
  //     "C. All members of the reviewing team are responsible for the result of the review",
  // },
  // //158
  // {
  //   question:
  //     "Verification can be termed as 'Are we building the product right?'",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //159
  // {
  //   question:
  //     "Which testing is used to verify that the system can perform properly when internal program or system limitations have been exceeded",
  //   options: [
  //     "A. Stress Testing",
  //     "B. Load Testing",
  //     "C. Performance Testing",
  //     "D. Volume testing",
  //   ],
  //   answer: "A. Stress Testing",
  // },
  // //160
  // {
  //   question:
  //     "Defects are recorded into three major purposes. They are:\n 1. To correct the defect\n 2. To report status of the application\n 3. To improve the software development process",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //161
  // {
  //   question:
  //     "Drivers are tools used to control and operate the software being tested.",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //162
  // {
  //   question: "Typical defects discovered by static analysis includes",
  //   options: [
  //     "A. Programming standard violations",
  //     "B. Referring a variable with an undefined value",
  //     "C. Security vulnerabilities",
  //     "D. All Above",
  //   ],
  //   answer: "C. Security vulnerabilities",
  // },
  // //163
  // {
  //   question: "EULA stands for",
  //   options: [
  //     "A. End Usability License Agreement",
  //     "B. End User License Agreement",
  //     "C. End User License Arrangement",
  //     "D. End User License Attachment",
  //   ],
  //   answer: "B. End User License Agreement",
  // },
  // //164
  // {
  //   question:
  //     "________ is a very early build intended for limited distribution to a few key customers and to marketing for demonstration purposes.",
  //   options: [
  //     "A. Alpha release",
  //     "B. Beta release",
  //     "C. Test release document",
  //     "D. Build",
  //   ],
  //   answer: "B. Beta release",
  // },
  // //165
  // {
  //   question: "CAST stands for",
  //   options: [
  //     "A. Computer Aided Software Testing",
  //     "B. Computer Aided Software Tools",
  //     "C. Computer Analysis Software Techniques",
  //     "D. None",
  //   ],
  //   answer: "A. Computer Aided Software Testing",
  // },
  // //166
  // {
  //   question:
  //     "The tool modifies the program code or manipulates the operating environment in any way is considered non-invasive",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //167
  // {
  //   question: "Which test may not mimic real world situations",
  //   options: [
  //     "A. Functional testing",
  //     "B. Structural Testing",
  //     "C. All of the above",
  //     "D. None of the above",
  //   ],
  //   answer: "B. Structural Testing",
  // },
  // //168
  // {
  //   question: "_______ includes both Black box and White Box Testing features",
  //   options: [
  //     "A. Gray Box Testing",
  //     "B. Hybrid Testing",
  //     "C. A. & B.",
  //     "D. None",
  //   ],
  //   answer: "A. Gray Box Testing",
  // },
  // //169
  // {
  //   question: "Exhaustive testing is possible",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //170
  // {
  //   question:
  //     "Tool which stores requirement statements, check for consistency and allow requirements to be prioritized and enable individual tests to be traceable to requirements, functions and features.",
  //   options: [
  //     "A. Incident management tools",
  //     "B. Requirements management tools",
  //     "C. Configuration management tools",
  //     "D. None",
  //   ],
  //   answer: "B. Requirements management tools",
  // },
  // //171
  // {
  //   question:
  //     "The number of tests to test all control statements equals the cyclomatic complexity",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //172
  // {
  //   question:
  //     "Boundary value analysis can only be used during white-box testing.",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //173
  // {
  //   question: "Which of these are objectives for software testing?",
  //   options: [
  //     "A. Determine the productivity of programmers",
  //     "B. Eliminate the need for future program maintenance",
  //     "C. Eliminate every error prior to release",
  //     "D. Uncover software errors",
  //   ],
  //   answer: "D. Uncover software errors",
  // },
  // //174
  // {
  //   question: "Failure is _________",
  //   options: [
  //     "A. Incorrect program behaviour due to a fault in the program",
  //     "B. Bug found before product Release",
  //     "C. Bug found after product Release",
  //     "D. Bug found during Design phase",
  //   ],
  //   answer: "A. Incorrect program behaviour due to a fault in the program",
  // },
  // //175
  // {
  //   question:
  //     "During the software development process, at what point can the test process start?",
  //   options: [
  //     "A. When the code is complete.",
  //     "B. When the design is complete.",
  //     "C. When the software requirements have been approved.",
  //     "D. When the first code module is ready for unit testing",
  //   ],
  //   answer: "C. When the software requirements have been approved.",
  // },
  // //176
  // {
  //   question: '"How much testing is enough?"',
  //   options: [
  //     "A. This question is impossible to answer",
  //     "B. This question is easy to answer",
  //     "C. The answer depends on the risk for your industry, contract and special requirements",
  //     "D. This answer depends on the maturity of your developers",
  //   ],
  //   answer:
  //     "C. The answer depends on the risk for your industry, contract and special requirements",
  // },
  // //177
  // {
  //   question:
  //     "Which of the following tools would be involved in the automation of regression test?",
  //   options: [
  //     "A. Data tester",
  //     "B. Boundary tester",
  //     "C. Capture/Playback",
  //     "D. Output comparator.",
  //   ],
  //   answer: "C. Capture/Playback",
  // },
  // //178
  // {
  //   question: "Incorrect form of Logic coverage is:",
  //   options: [
  //     "A. Statement Coverage",
  //     "B. Pole Coverage",
  //     "C. Condition Coverage",
  //     "D. Path Coverage",
  //   ],
  //   answer: "B. Pole Coverage",
  // },
  // //179
  // {
  //   question: "Code Coverage is used as a measure of what?",
  //   options: [
  //     "A. Defects",
  //     "B. Trends analysis",
  //     "C. Test Effectiveness",
  //     "D. Time Spent Testing",
  //   ],
  //   answer: "C. Test Effectiveness",
  // },
  // //180
  // {
  //   question: "Fault Masking is",
  //   options: [
  //     "A. Error condition hiding another error condition",
  //     "B. Creating a test case which does not reveal a fault",
  //     "C. Masking a fault by developer",
  //     "D. Masking a fault by a tester",
  //   ],
  //   answer: "A. Error condition hiding another error condition",
  // },
  // //181
  // {
  //   question:
  //     "Which of the following is not a quality characteristic listed in ISO 9126 Standard?",
  //   options: [
  //     "A. Functionality",
  //     "B. Usability",
  //     "C. Supportability",
  //     "D. Maintainability",
  //   ],
  //   answer: "C. Supportability",
  // },
  // //182
  // {
  //   question:
  //     "One Key reason why developers have difficulty testing their own work is :",
  //   options: [
  //     "A. Lack of technical documentation",
  //     "B. Lack of test tools on the market for developers",
  //     "C. Lack of training",
  //     "D. Lack of Objectivity",
  //   ],
  //   answer: "D. Lack of Objectivity",
  // },
  // //183
  // {
  //   question: "Statement Coverage will not check for the following.",
  //   options: [
  //     "A. Missing Statements",
  //     "B. Unused Branches",
  //     "C. Dead Code",
  //     "D. Unused Statement",
  //   ],
  //   answer: "A. Missing Statements",
  // },
  // //184
  // {
  //   question:
  //     "Given the Following program \nIF X <>= Z\n THEN Statement 2; \nEND\n McCabe’s Cyclomatic Complexity is :",
  //   options: ["A. 2", "B. 3", "C. 4", "D. 5"],
  //   answer: "B. 3",
  // },
  // //185
  // {
  //   question:
  //     "To test a function, the programmer has to write a _________, which calls the function to be tested and passes it test data.",
  //   options: ["A. Stub", "B. Driver", "C. Proxy", "D. None of the above"],
  //   answer: "B. Driver",
  // },
  // //186
  // {
  //   question: "Pick the best definition of quality",
  //   options: [
  //     "A. Quality is job one",
  //     "B. Zero defects",
  //     "C. Conformance to requirements",
  //     "D. Work as designed",
  //   ],
  //   answer: "C. Conformance to requirements",
  // },
  // //187
  // {
  //   question: "Boundary value testing",
  //   options: [
  //     "A. Is the same as equivalence partitioning tests",
  //     "B. Test boundary conditions on, below and above the edges of input and output equivalence classes",
  //     "C. Tests combinations of input circumstances",
  //     "D. Is used in white box testing strategy",
  //   ],
  //   answer:
  //     "B. Test boundary conditions on, below and above the edges of input and output equivalence classes",
  // },
  // //188
  // {
  //   question:
  //     "An input field takes the year of birth between 1900 and 2004 \nThe boundary values for testing this field are",
  //   options: [
  //     "A. 0,1900,2004,2005",
  //     "B. 1900, 2004",
  //     "C. 1899,1900,2004,2005",
  //     "D. 1899, 1900, 1901,2003,2004,2005",
  //   ],
  //   answer: "C. 1899,1900,2004,2005",
  // },
  // //189
  // {
  //   question:
  //     "How many test cases are necessary to cover all the possible sequences of statements (paths) for the following program fragment? Assume that the two conditions are independent of each other: \nif (Condition 1) \nthen statement 1 \nelse statement 2 \nfi\n if (Condition 2) \nthen statement 3 \nfi",
  //   options: [
  //     "A. 2 Test Cases",
  //     "B. 3 Test Cases",
  //     "C. 4 Test Cases",
  //     "D. Not achievable",
  //   ],
  //   answer: "A. 2 Test Cases",
  // },
  // //190
  // {
  //   question: "A common test technique during component test is",
  //   options: [
  //     "A. Statement and branch testing",
  //     "B. Usability testing",
  //     "C. Security testing",
  //     "D. Performance testing",
  //   ],
  //   answer: "A. Statement and branch testing",
  // },
  // //191
  // {
  //   question: "In a review meeting a moderator is a person who",
  //   options: [
  //     "A. Takes minutes of the meeting",
  //     "B. Mediates between people",
  //     "C. Takes telephone calls",
  //     "D. Writes the documents to be reviewed",
  //   ],
  //   answer: "B. Mediates between people",
  // },
  // //192
  // {
  //   question: "Acceptance test cases are based on what?",
  //   options: ["A. Requirements", "B. Design", "C. Code", "D. Decision table"],
  //   answer: "A. Requirements",
  // },
  // //193
  // {
  //   question: "Which one of the following are non-functional testing methods?",
  //   options: [
  //     "A. System testing",
  //     "B. Usability testing",
  //     "C. Performance testing",
  //     "D. Both B & C",
  //   ],
  //   answer: "D. Both B & C",
  // },
  // //194
  // {
  //   question: "Independent Verification & Validation is",
  //   options: [
  //     "A. Done by the Developer",
  //     "B. Done by the Test Engineers",
  //     "C. Done By Management",
  //     "D. Done by an Entity Outside the Project’s sphere of influence",
  //   ],
  //   answer: "D. Done by an Entity Outside the Project’s sphere of influence",
  // },
  // //195
  // {
  //   question: "Defect Management process does not include",
  //   options: [
  //     "A. Defect prevention",
  //     "B. Deliverable base-lining",
  //     "C. Management reporting",
  //     "D. None of the above",
  //   ],
  //   answer: "B. Deliverable base-lining",
  // },
  // //196
  // {
  //   question:
  //     "Which of the following could be a reason for a failure\n1) Testing fault\n2) Software fault\n3) Design fault\n4) Environment Fault\n5) Documentation Fault",
  //   options: [
  //     "A. 2 is a valid reason; 1,3,4 & 5 are not",
  //     "B. 1,2,3,4 are valid reasons; 5 is not",
  //     "C. 1,2,3 are valid reasons; 4 & 5 are not",
  //     "D. All of them are valid reasons for failure",
  //   ],
  //   answer: "D. All of them are valid reasons for failure",
  // },
  // //197
  // {
  //   question: "Test are prioritized so that:",
  //   options: [
  //     "A. You shorten the time required for testing",
  //     "B. You do the best testing in the time available",
  //     "C. You do more effective testing",
  //     "D. You find more faults",
  //   ],
  //   answer: "B. You do the best testing in the time available",
  // },
  // //198
  // {
  //   question:
  //     "When a new testing tool is purchased, it should be used first by:",
  //   options: [
  //     "A. A small team to establish the best way to use the tool",
  //     "B. Everyone who may eventually have some use for the tool",
  //     "C. The independent testing team",
  //     "D. The vendor contractor to write the initial scripts",
  //   ],
  //   answer: "A. A small team to establish the best way to use the tool",
  // },
  // //199
  // {
  //   question:
  //     "During which test activity could faults be found most cost effectively?",
  //   options: [
  //     "A. Execution",
  //     "B. Design",
  //     "C. Planning",
  //     "D. Check Exit criteria completion",
  //   ],
  //   answer: "C. Planning",
  // },
  // //200
  // {
  //   question:
  //     "What is the difference between testing software developed by contractor outside your country, versus testing software developed by a contractor within your country?",
  //   options: [
  //     "A. Does not meet people needs",
  //     "B. Cultural difference",
  //     "C. Loss of control over reallocation of resources",
  //     "D. Relinquishments of control",
  //   ],
  //   answer: "B. Cultural difference",
  // },
  // //201
  // {
  //   question: "The inputs for developing a test plan are taken from",
  //   options: [
  //     "A. Project plan",
  //     "B. Business plan",
  //     "C. Support plan",
  //     "D. None of the above",
  //   ],
  //   answer: "A. Project plan",
  // },
  // //202
  // {
  //   question:
  //     "To test a function, the programmer has to write a ______, which calls the function and passes it the test data.",
  //   options: ["A. Stub", "B. Driver", "C. Proxy", "D. None of the above"],
  //   answer: "B. Driver",
  // },
  // //203
  // {
  //   question: "Which of the following is not a static testing technique",
  //   options: [
  //     "A. Error guessing",
  //     "B. Walkthrough",
  //     "C. Data flow analysis",
  //     "D. Inspections",
  //   ],
  //   answer: "A. Error guessing",
  // },
  // //204
  // {
  //   question:
  //     "Which of the following statements about component testing is not true?",
  //   options: [
  //     "A. Component testing should be performed by development",
  //     "B. Component testing is also know as isolation or module testing",
  //     "C. Component testing should have completion criteria planned",
  //     "D. Component testing does not involve regression testing",
  //   ],
  //   answer: "D. Component testing does not involve regression testing",
  // },
  // //205
  // {
  //   question: "Inspections can find all the following except",
  //   options: [
  //     "A. Variables not defined in the code",
  //     "B. Spelling and grammar faults in the documents",
  //     "C. Requirements that have been omitted from the design documents",
  //     "D. How much of the code has been covered",
  //   ],
  //   answer: "D. How much of the code has been covered",
  // },
  // //206
  // {
  //   question: "Which of the following is not a characteristic for Testability?",
  //   options: [
  //     "A. Operability",
  //     "B. Observability",
  //     "C. Simplicity",
  //     "D. Robustness",
  //   ],
  //   answer: "D. Robustness",
  // },
  // //207
  // {
  //   question:
  //     "Software testing accounts to what percent of software development costs?",
  //   options: ["A. 10-20", "B. 40-50", "C. 70-80", "D. 5-10"],
  //   answer: "B. 40-50",
  // },
  // //208
  // {
  //   question: "Equivalence partitioning is:",
  //   options: [
  //     "A. A black box testing technique used only by developers",
  //     "B. A black box testing technique than can only be used during system testing",
  //     "C. A black box testing technique appropriate to all levels of testing",
  //     "D. A white box testing technique appropriate for component testing",
  //   ],
  //   answer:
  //     "C. A black box testing technique appropriate to all levels of testing",
  // },
  // //209
  // {
  //   question: "If an expected result is not specified then:",
  //   options: [
  //     "A. We cannot run the test",
  //     "B. It may be difficult to repeat the test",
  //     "C. It may be difficult to determine if the test has passed or failed",
  //     "D. We cannot automate the user inputs",
  //   ],
  //   answer:
  //     "C. It may be difficult to determine if the test has passed or failed",
  // },
  // //210
  // {
  //   question: "How much testing is enough",
  //   options: [
  //     "A. This question is impossible to answer",
  //     "B. The answer depends on the risks for your industry, contract and special requirements",
  //     "C. The answer depends on the maturity of your developers",
  //     "D. The answer should be standardized for the software development industry",
  //   ],
  //   answer:
  //     "B. The answer depends on the risks for your industry, contract and special requirements",
  // },
  // //211
  // {
  //   question: "The purpose of requirement phase is",
  //   options: [
  //     "A. To freeze requirements",
  //     "B. To understand user needs",
  //     "C. To define the scope of testing",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //212
  // {
  //   question:
  //     "Which of these can be successfully tested using Loop Testing methodology?",
  //   options: [
  //     "A. Simple Loops",
  //     "B. Nested Loops",
  //     "C. Concatenated Loops",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //213
  // {
  //   question: "Cyclomatic Complexity method comes under which testing method.",
  //   options: ["A. White box", "B. Black box", "C. Green box", "D. Yellow box"],
  //   answer: "A. White box",
  // },
  // //214
  // {
  //   question: "A reliable system will be one that:",
  //   options: [
  //     "A. Is unlikely to be completed on schedule",
  //     "B. Is unlikely to cause a failure",
  //     "C. Is likely to be fault-free",
  //     "D. Is likely to be liked by the users",
  //   ],
  //   answer: "B. Is unlikely to cause a failure",
  // },
  // //215
  // {
  //   question:
  //     "Which, in general, is the least required skill of a good tester?",
  //   options: [
  //     "A. Being diplomatic",
  //     "B. Able to write software",
  //     "C. Having good attention to detail",
  //     "D. Able to be relied on",
  //   ],
  //   answer: "B. Able to write software",
  // },
  // //216
  // {
  //   question: "A regression test:",
  //   options: [
  //     "A. Will always be automated",
  //     "B. Will help ensure unchanged areas of the software have not been affected",
  //     "C. Will help ensure changed areas of the software have not been affected",
  //     "D. Can only be run during user acceptance testing",
  //   ],
  //   answer:
  //     "B. Will help ensure unchanged areas of the software have not been affected",
  // },
  // //217
  // {
  //   question: "Function/Test matrix is a type of",
  //   options: [
  //     "A. Interim Test report",
  //     "B. Final test report",
  //     "C. Project status report",
  //     "D. Management report",
  //   ],
  //   answer: "C. Project status report",
  // },
  // //218
  // {
  //   question: "The process starting with the terminal modules is called:",
  //   options: [
  //     "A. Top-down integration",
  //     "B. Bottom-up integration",
  //     "C. None of the above",
  //     "D. Module integration",
  //   ],
  //   answer: "B. Bottom-up integration",
  // },
  // //219
  // {
  //   question: "Verification is:",
  //   options: [
  //     "A. Checking that we are building the right system",
  //     "B. Checking that we are building the system right",
  //     "C. Performed by an independent test team",
  //     "D. Making sure that it is what the user really wants",
  //   ],
  //   answer: "B. Checking that we are building the system right",
  // },
  // //220
  // {
  //   question: "The difference between re-testing and regression testing is",
  //   options: [
  //     "A. Re-testing is running a test again; regression testing looks for unexpected side effects",
  //     "B. Re-testing looks for unexpected side effects; regression testing is repeating those tests",
  //     "C. Re-testing is done after faults are fixed; regression testing is done earlier",
  //     "D. Re-testing uses different environments, regression testing uses the same environment",
  //     "E. Re-testing is done by developers, regression testing is done by independent testers",
  //   ],
  //   answer:
  //     "A. Re-testing is running a test again; regression testing looks for unexpected side effects",
  // },
  // //221
  // {
  //   question: "Testing should be stopped when:",
  //   options: [
  //     "A. All the planned tests have been run",
  //     "B. Time has run out",
  //     "C. All faults have been fixed correctly",
  //     "D. Both A. and C.",
  //     "E. It depends on the risks for the system being tested",
  //   ],
  //   answer: "E. It depends on the risks for the system being tested",
  // },
  // //222
  // {
  //   question:
  //     "Which of the following is the main purpose of the integration strategy for integration testing in the small?",
  //   options: [
  //     "A. To ensure that all of the small modules are tested adequately",
  //     "B. To ensure that the system interfaces to other systems and networks",
  //     "C. To specify which modules to combine when and how many at once",
  //     "D. To ensure that the integration testing can be performed by a small team",
  //     "E. To specify how the software should be divided into modules",
  //   ],
  //   answer: "C. To specify which modules to combine when and how many at once",
  // },
  // //223
  // {
  //   question: "Which of the following is NOT part of configuration management:",
  //   options: [
  //     "A. Status accounting of configuration items",
  //     "B. Auditing conformance to ISO9001",
  //     "C. Identification of test versions",
  //     "D. Record of changes to documentation over time",
  //     "E. Controlled library access",
  //   ],
  //   answer: "B. Auditing conformance to ISO9001",
  // },
  // //224
  // {
  //   question: "Regression testing should be performed:\nv) Every week\nw) After the software has changed\nx) As often as possible\ny) When the environment has changed\nz) Wwhen the project manager says",
  //   options: [
  //     "A. v & w are true, x – z are false",
  //     "B. w, x & y are true, v & z are false",
  //     "C. w & y are true, v, x & z are false",
  //     "D. w is true, v, x y and z are false",
  //     "E. All of the above are true",
  //   ],
  //   answer: "C. w & y are true, v, x & z are false",
  // },
  // //225
  // {
  //   question:
  //     "A tool that supports traceability, recording of incidents or scheduling of tests is called:",
  //   options: [
  //     "A. A dynamic analysis tool",
  //     "B. A test execution tool",
  //     "C. A debugging tool",
  //     "D. A test management tool",
  //     "E. A configuration management tool",
  //   ],
  //   answer: "E. A configuration management tool",
  // },
  // //226
  // {
  //   question: "The cost of fixing a fault:",
  //   options: [
  //     "A. Is not important",
  //     "B. Increases as we move the product towards live use",
  //     "C. Decreases as we move the product towards live use",
  //     "D. Is more expensive if found in requirements than functional design",
  //     "E. Can never be determined",
  //   ],
  //   answer: "B. Increases as we move the product towards live use",
  // },
  // //227
  // {
  //   question:
  //     "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the following inputs might be a result of designing tests for only valid equivalence classes and valid boundaries:",
  //   options: [
  //     "A. 1000, 5000, 99999",
  //     "B. 9999, 50000, 100000",
  //     "C. 10000, 50000, 99999",
  //     "D. 10000, 99999",
  //     "E. 9999, 10000, 50000, 99999, 10000",
  //   ],
  //   answer: "C. 10000, 50000, 99999",
  // },
  // //228
  // {
  //   question:
  //     "When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
  //   options: [
  //     "A. An error",
  //     "B. A fault",
  //     "C. A failure",
  //     "D. A defect",
  //     "E. A mistake",
  //   ],
  //   answer: "C. A failure",
  // },
  // //229
  // {
  //   question:
  //     "Which expression best matches the following characteristics or review processes:\n1. Led by author\n2. Undocumented\n3. No management participation\n4. Led by a trained moderator or leader\n5. Uses entry exit criteria\ns) Inspection\nt) Peer review\nu) Informal review\nv) Walkthrough",
  //   options: [
  //     "A. s = 4, t = 3, u = 2 and 5, v = 1",
  //     "B. s = 4 and 5, t = 3, u = 2, v = 1",
  //     "C. s = 1 and 5, t = 3, u = 2, v = 4",
  //     "D. s = 5, t = 4, u = 3, v = 1 and 2",
  //     "E. s = 4 and 5, t = 1, u = 2, v = 3",
  //   ],
  //   answer: "B. s = 4 and 5, t = 3, u = 2, v = 1",
  // },
  // //230
  // {
  //   question:
  //     'Given the following:\nSwitch PC on\nStart "outlook"\nIF outlook appears THEN\nSend an email\nClose outlook',
  //   options: [
  //     "A. 1 test for statement coverage, 1 for branch coverage",
  //     "B. 1 test for statement coverage, 2 for branch coverage",
  //     "C. 1 test for statement coverage. 3 for branch coverage",
  //     "D. 2 tests for statement coverage, 2 for branch coverage",
  //     "E. 2 tests for statement coverage, 3 for branch coverage",
  //   ],
  //   answer: "B. 1 test for statement coverage, 2 for branch coverage",
  // },
  // //231
  // {
  //   question: "Test managers should not:",
  //   options: [
  //     "A. Report on deviations from the project plan",
  //     "B. Sign the system off for release",
  //     "C. Re-allocate resource to meet original plans",
  //     "D. Rise incidents on faults that they have found",
  //     "E. Provide information for risk analysis and quality improvement",
  //   ],
  //   answer: "C. Re-allocate resource to meet original plans",
  // },
  // //232
  // {
  //   question: "Which of the following is NOT part of system testing:",
  //   options: [
  //     "A. Business process-based testing",
  //     "B. Performance, load and stress testing",
  //     "C. Requirements-based testing",
  //     "D. Usability testing",
  //     "E. Top-down integration testing",
  //   ],
  //   answer: "E. Top-down integration testing",
  // },
  // //233
  // {
  //   question:
  //     "When a new testing tool is purchased, it should be used first by:",
  //   options: [
  //     "A. A small team to establish the best way to use the tool",
  //     "B. Everyone who may eventually have some use for the tool",
  //     "C. The independent testing team",
  //     "D. The managers to see what projects it should be used in",
  //     "E. The vendor contractor to write the initial scripts",
  //   ],
  //   answer: "A. A small team to establish the best way to use the tool",
  // },
  // //234
  // {
  //   question: "Which of the following is not part of performance testing:",
  //   options: [
  //     "A. Measuring response time",
  //     "B. Measuring transaction rates",
  //     "C. Recovery testing",
  //     "D. Simulating many users",
  //     "E. Generating many transactions",
  //   ],
  //   answer: "C. Recovery testing",
  // },
  // //235
  // {
  //   question: "What is the purpose of test completion criteria in a test plan:",
  //   options: [
  //     "A. To know when a specific test has finished its execution",
  //     "B. To ensure that the test case specification is complete",
  //     "C. To set the criteria used in generating test inputs",
  //     "D. To know when test planning is complete",
  //     "E. To plan when to stop testing",
  //   ],
  //   answer: "E. To plan when to stop testing",
  // },
  // //236
  // {
  //   question:
  //     'Given the following code, which is true:\nIF A > B THEN\nC = A – B\nELSE\nC = A + B\nENDIF\nRead D\nIF C = D Then\nPrint "Error"\nENDIF',
  //   options: [
  //     "A. 1 test for statement coverage, 3 for branch coverage",
  //     "B. 2 tests for statement coverage, 2 for branch coverage",
  //     "C. 2 tests for statement coverage. 3 for branch coverage",
  //     "D. 3 tests for statement coverage, 3 for branch coverage",
  //     "E. 3 tests for statement coverage, 2 for branch coverage",
  //   ],
  //   answer: "B. 2 tests for statement coverage, 2 for branch coverage",
  // },
  // //237
  // {
  //   question: "Unreachable code would best be found using:",
  //   options: [
  //     "A. Code reviews",
  //     "B. Code inspections",
  //     "C. A coverage tool",
  //     "D. A test management tool",
  //     "E. A static analysis tool",
  //   ],
  //   answer: "A. Code reviews",
  // },
  // //238
  // {
  //   question:
  //     "What information need not be included in a test incident report:",
  //   options: [
  //     "A. How to fix the fault",
  //     "B. How to reproduce the fault",
  //     "C. Test environment details",
  //     "D. Severity, priority",
  //     "E. The actual and expected outcomes",
  //   ],
  //   answer: "A. How to fix the fault",
  // },
  // //239
  // {
  //   question:
  //     "Which of the following is NOT included in the Test Plan document of the Test Documentation Standard:",
  //   options: [
  //     "A. Test items (i.e. software versions)",
  //     "B. What is not to be tested",
  //     "C. Test environments",
  //     "D. Quality plans",
  //     "E. Schedules and deadlines",
  //   ],
  //   answer: "D. Quality plans",
  // },
  // //240
  // {
  //   question:
  //     "IEEE 829 test plan documentation standard contains all of the following except:",
  //   options: [
  //     "A. Test items",
  //     "B. Test deliverables",
  //     "C. Test tasks",
  //     "D. Test environment",
  //     "E. Test specification",
  //   ],
  //   answer: "E. Test specification",
  // },
  // //251
  // {
  //   question: "Which of the following is NOT a black box technique:",
  //   options: [
  //     "A. Equivalence partitioning",
  //     "B. State transition testing",
  //     "C. LCSAJ",
  //     "D. Syntax testing",
  //     "E. Boundary value analysis",
  //   ],
  //   answer: "C. LCSAJ",
  // },
  // //252
  // {
  //   question: "Expected results are:",
  //   options: [
  //     "A. Only important in system testing",
  //     "B. Only used in component testing",
  //     "C. Never specified in advance",
  //     "D. Most useful when specified in advance",
  //     "E. Derived from the code",
  //   ],
  //   answer: "D. Most useful when specified in advance",
  // },
  // //253
  // {
  //   question: "Beta testing is:",
  //   options: [
  //     "A. Performed by customers at their own site",
  //     "B. Performed by customers at their software developer’s site",
  //     "C. Performed by an independent test team",
  //     "D. Useful to test bespoke software",
  //     "E. Performed as early as possible in the lifecycle",
  //   ],
  //   answer: "A. Performed by customers at their own site",
  // },
  // //254
  // {
  //   question:
  //     "Consider the following:\nPick up and read the newspaper\nLook at what is on television\nIf there is a program that you are interested in watching then switch\n the the television on\nand watch the program\nOtherwise\nContinue reading the newspaper\nIf there is a crossword in the newspaper then try and complete the\ncrossword",
  //   options: [
  //     "A. SC = 1 and DC = 1",
  //     "B. SC = 1 and DC = 2",
  //     "C. SC = 1 and DC = 3",
  //     "D. SC = 2 and DC = 2",
  //     "E. SC = 2 and DC = 3",
  //   ],
  //   answer: "E. SC = 2 and DC = 3",
  // },
  // //255
  // {
  //   question:
  //     "A typical commercial test execution tool would be able to perform all of the following EXCEPT:",
  //   options: [
  //     "A. Generating expected outputs",
  //     "B. Replaying inputs according to a programmed script",
  //     "C. Comparison of expected outcomes with actual outcomes",
  //     "D. Recording test inputs",
  //     "E. Reading test values from a data file",
  //   ],
  //   answer: "A. Generating expected outputs",
  // },
  // //256
  // {
  //   question:
  //     "Consider the following statements about early test design: \ni. Early test design can prevent fault multiplication\nii. Faults found during early test design are more expensive to fix\niii. Early test design can find faults\niv. Early test design can cause changes to the requirements\nv. Early test design takes more effort",
  //   options: [
  //     "A. i, iii & iv are true. Ii & v are false",
  //     "B. iii is true, I, ii, iv & v are false",
  //     "C. iii & iv are true. i, ii & v are false",
  //     "D. i, iii, iv & v are true, ii is false",
  //     "E. i & iii are true, ii, iv & v are false",
  //   ],
  //   answer: "A. i, iii & iv are true. Ii & v are false",
  // },
  // //257
  // {
  //   question:
  //     'Given the following code, which is true about the minimum number of test cases required for full statement and branch coverage: Read P\nRead Q\nIF P+Q > 100 THEN\nPrint "Large"\nENDIF\nIf P > 50 THEN\nPrint "P Large"\nENDIF',
  //   options: [
  //     "A. 1 test for statement coverage, 3 for branch coverage",
  //     "B. 1 test for statement coverage, 2 for branch coverage",
  //     "C. 1 test for statement coverage, 1 for branch coverage",
  //     "D. 2 tests for statement coverage, 3 for branch coverage",
  //     "E. 2 tests for statement coverage, 2 for branch coverage",
  //   ],
  //   answer: "B. 1 test for statement coverage, 2 for branch coverage",
  // },
  // //258
  // {
  //   question: "The place to start if you want a (new) test tool is:",
  //   options: [
  //     "A. Attend a tool exhibition",
  //     "B. Invite a vendor to give a demo",
  //     "C. Analyse your needs and requirements",
  //     "D. Find out what your budget would be for the tool",
  //     "E. Search the internet",
  //   ],
  //   answer: "C. Analyse your needs and requirements",
  // },
  // //259
  // {
  //   question: "Error guessing is best used",
  //   options: [
  //     "A. As the first approach to deriving test cases",
  //     "B. After more formal techniques have been applied",
  //     "C. By inexperienced testers",
  //     "D. After the system has gone live",
  //     "E. Only by end users",
  //   ],
  //   answer: "B. After more formal techniques have been applied",
  // },
  // //260
  // {
  //   question:
  //     "Exit Criteria may consist of: \ni. Thoroughness measures, such as coverage of code, functionality or risk\nii. Estimates of Defect density or reliability measures.\niii. Residual risk such as defects not fixed or lack of test coverage in certain areas\niv. Verifying the Test Environment.",
  //   options: [
  //     "A. iv is correct and i, ii, iii are incorrect",
  //     "B. i, ii, iii is correct and iv is incorrect",
  //     "C. ii is correct and i, ii, iii are incorrect",
  //     "D. iii and iv are correct and i, ii are incorrect",
  //   ],
  //   answer: "B. i, ii, iii is correct and iv is incorrect",
  // },
  // //261
  // {
  //   question:
  //     "One of the fields on a form contains a text box, which accepts alphabets in lower or upper case. Identify the invalid Equivalance class value.",
  //   options: ["A. CLASS", "B. cLASS", "C. CLass", "D. CLa01ss"],
  //   answer: "D. CLa01ss",
  // },
  // //262
  // {
  //   question: "The Kick Off phase of a formal review includes the following:",
  //   options: [
  //     "A. Explaining the objective",
  //     "B. Fixing defects found typically done by author",
  //     "C. Follow up",
  //     "D. Individual Meeting preparations",
  //   ],
  //   answer: "A. Explaining the objective",
  // },
  // //263
  // {
  //   question: "Peer Reviews are also called as:",
  //   options: [
  //     "A. Inspection",
  //     "B. Walkthrough",
  //     "C. Technical Review",
  //     "D. Formal Review",
  //   ],
  //   answer: "C. Technical Review",
  // },
  // //264
  // {
  //   question:
  //     "Validation involves which of the following: \ni. Helps to check the Quality of the Built Product\nii. Helps to check that we have built the right product.\niii. Helps in developing the product\niv. Monitoring tool wastage and obsoleteness",
  //   options: [
  //     "A. Options i, ii, iii, iv are true.",
  //     "B. ii is true and i, iii, iv are false",
  //     "C. i, ii, iii are true and iv is false",
  //     "D. iii is true and i, ii, iv are false.",
  //   ],
  //   answer: "B. ii is true and i, iii, iv are false",
  // },
  // //265
  // {
  //   question:
  //     "Success Factors for a review include: \ni. Each Review does not have a predefined objective\nii. Defects found are welcomed and expressed objectively\niii. Management supports a good review process.\niv. There is an emphasis on learning and process improvement.",
  //   options: [
  //     "A. ii, iii, iv are correct and i is incorrect",
  //     "B. iii, i, iv is correct and ii is incorrect",
  //     "C. i, iii, iv, ii is incorrect",
  //     "D. ii is correct",
  //   ],
  //   answer: "A. ii, iii, iv are correct and i is incorrect",
  // },
  // //266
  // {
  //   question:
  //     "Which of the following helps in monitoring the Test Progress: \ni. Percentage of Test Case Execution\nii. Percentage of work done in test environment preparation.\niii. Defect Information e.g. defect density, defects found and fixed\niv. The size of the testing Team and skills of the engineers",
  //   options: [
  //     "A. iv is correct and i, ii, iii are incorrect",
  //     "B. i, ii, iii are correct and iv is incorrect",
  //     "C. i, ii are correct and iii, iv are incorrect",
  //     "D. i, iv are correct and ii, iii are incorrect",
  //   ],
  //   answer: "B. i, ii, iii are correct and iv is incorrect",
  // },
  // //267
  // {
  //   question:
  //     "Defects discovered by static analysis tools include: \ni. Variables that are never used.\nii. Security vulnerabilities.\niii. Programming Standard Violations\niv. Uncalled functions and procedures",
  //   options: [
  //     "A. i, ii, iii, iv is correct",
  //     "B. iii is correct i, ii, iv are incorrect.",
  //     "C. i, ii, iii and iv are incorrect",
  //     "D. iv, ii is correct",
  //   ],
  //   answer: "A. i, ii, iii, iv is correct",
  // },
  // //268
  // {
  //   question:
  //     "Which of the following is true about White and Black Box Testing Technique:-",
  //   options: [
  //     "A. Equivalence partitioning, Decision Table and Control flow are White box Testing Techniques.",
  //     "B. Equivalence partitioning, Boundary Value Analysis, Data Flow are Black Box Testing Techniques.",
  //     "C. Equivalence partitioning, State Transition, Use Case Testing are black box Testing Techniques.",
  //     "D. Equivalence Partitioning, State Transition, Use Case Testing and Decision Table are White Box Testing Techniques.",
  //   ],
  //   answer:
  //     "C. Equivalence partitioning, State Transition, Use Case Testing are black box Testing Techniques.",
  // },
  // //269
  // {
  //   question: "Which of the following techniques is NOT a black box technique?",
  //   options: [
  //     "A. State transition testing",
  //     "B. LCSAJ (Linear Code Sequence and Jump)",
  //     "C. Syntax testing",
  //     "D. Boundary value analysis",
  //   ],
  //   answer: "B. LCSAJ (Linear Code Sequence and Jump)",
  // },
  // //270
  // {
  //   question:
  //     "Features of White Box Testing Technique: \ni. We use explicit knowledge of the internal workings of the item being tested to select the test data.\nii. Uses specific knowledge of programming code to examine outputs and assumes that the tester knows the path of logic in a unit or a program.\niii. Checking for the performance of the application\niv. Also checks for functionality.",
  //   options: [
  //     "A. i, ii are true and iii and iv are false",
  //     "B. iii is true and i, ii, iv are false",
  //     "C. ii, iii is true and i, iv is false",
  //     "D. iii and iv are true and i, ii are false",
  //   ],
  //   answer: "A. i, ii are true and iii and iv are false",
  // },
  // //271
  // {
  //   question:
  //     "The Provision and Management of a controlled library containing all the configurations items is called as:",
  //   options: [
  //     "A. Configuration Control",
  //     "B. Status Accounting",
  //     "C. Configuration Identification",
  //     "D. Configuration Identification",
  //   ],
  //   answer: "A. Configuration Control",
  // },
  // //272
  // {
  //   question:
  //     "The selection of a test approach should consider the context: \ni. Risk of Failure of the Project, hazards to the product and risks of product failure to humans\nii. Skills and experience of the people in the proposed technique, tools and methods\niii. The objective of the testing endeavor and the mission of the testing team.\niv. The size of the testing Team",
  //   options: [
  //     "A. i, ii, iii, iv are true",
  //     "B. i, ii, iii are true and iv is false",
  //     "C. ii, iii, iv are true and i is false",
  //     "D. i, iv are true and ii, iii are false",
  //   ],
  //   answer: "B. i, ii, iii are true and iv is false",
  // },
  // //273
  // {
  //   question: "Benefits of Independent Testing:",
  //   options: [
  //     "A. Independent testers are much more qualified than Developers",
  //     "B. Independent testers see other and different defects and are unbiased.",
  //     "C. Independent Testers cannot identify defects.",
  //     "D. Independent Testers can test better than developers",
  //   ],
  //   answer:
  //     "B. Independent testers see other and different defects and are unbiased.",
  // },
  // //274
  // {
  //   question:
  //     "Minimum Test Required for Statement Coverage: \nDisc = 0\nOrder-qty = 0\nRead Order-qty\nIf Order-qty >=20 then\nDisc = 0.05\nIf Order-qty >=100 then\nDisc =0.1\nEnd if\nEnd if",
  //   options: [
  //     "A. Statement coverage is 4",
  //     "B. Statement coverage is 1",
  //     "C. Statement coverage is 3",
  //     "D. Statement Coverage is 2",
  //   ],
  //   answer: "B. Statement coverage is 1",
  // },
  // //275
  // {
  //   question: "Test Conditions are derived from:",
  //   options: [
  //     "A. Specifications",
  //     "B. Test Cases",
  //     "C. Test Data",
  //     "D. Test Design",
  //   ],
  //   answer: "A. Specifications",
  // },
  // //276
  // {
  //   question:
  //     "Which of the following is the task of a Test Lead / Leader: \ni. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project.\nii. Write Test Summary Reports based on the information gathered during testing\niii. Decide what should be automated , to what degree and how.\niv. Create the Test Specifications",
  //   options: [
  //     "A. i, ii, iii is true and iv is false",
  //     "B. ii, iii, iv is true and i is false",
  //     "C. i is true and ii, iii, iv are false",
  //     "D. iii and iv is correct and i and ii are incorrect",
  //   ],
  //   answer: "A. i, ii, iii is true and iv is false",
  // },
  // //277
  // {
  //   question: "Impact Analysis helps to decide:",
  //   options: [
  //     "A. How much regression testing should be done.",
  //     "B. Exit Criteria",
  //     "C. How many more test cases need to written.",
  //     "D. Different Tools to perform Regression Testing",
  //   ],
  //   answer: "A. How much regression testing should be done.",
  // },
  // //278
  // {
  //   question:
  //     "Drivers are also known as: \ni. Spade\nii. Test harness\niii. Scaffolding",
  //   options: [
  //     "A. i, ii are true and iii is false",
  //     "B. i, iii are true and ii is false",
  //     "C. ii, iii are true and i is false",
  //     "D. All of the above are true",
  //   ],
  //   answer: "C. ii, iii are true and i is false",
  // },
  // //279
  // {
  //   question:
  //     "Which of the following is not a type of incremental testing approach?",
  //   options: [
  //     "A. Top down",
  //     "B. Big-bang",
  //     "C. Bottom up",
  //     "D. Functional incrementation.",
  //   ],
  //   answer: "B. Big-bang",
  // },
  // //280
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid: \nAn employee has £4000 of salary tax free. The next £1500 is taxed at 10% The next £28000 is taxed at 22% Any further amount is taxed at 40% Which of these groups of numbers would fall into the same equivalence class?",
  //   options: [
  //     "A. £4800; £14000; £28000",
  //     "B. £5200; £5500; £28000",
  //     "C. £28001; £32000; £35000",
  //     "D. £5800; £28000; £32000",
  //   ],
  //   answer: "D. £5800; £28000; £32000",
  // },
  // //281
  // {
  //   question: "In case of Large Systems:",
  //   options: [
  //     "A. Only few tests should be run",
  //     "B. Testing should be on the basis of Risk",
  //     "C. Only Good Test Cases should be executed.",
  //     "D. Test Cases written by good test engineers should be executed.",
  //   ],
  //   answer: "B. Testing should be on the basis of Risk",
  // },
  // //282
  // {
  //   question:
  //     "What is the expected result for each of the following test cases?\nA. Citibank card member, holding a Silver room\nB. Non Citibank-member, holding a Platinum room",
  //   options: [
  //     "A. A – Don’t offer any upgrade, B – Don’t offer any upgrade.",
  //     "B. A – Don’t offer any upgrade, B – Offer upgrade to Gold.",
  //     "C. A – Offer upgrade to Silver, B – Offer upgrade to Silver.",
  //     "D. A – Offer upgrade to Gold, B – Don’t offer any upgrade.",
  //   ],
  //   answer: "D. A – Offer upgrade to Gold, B – Don’t offer any upgrade.",
  // },
  // //283
  // {
  //   question:
  //     "Which of the following is not phase of the Fundamental Test Process?",
  //   options: [
  //     "A. Test Planning and Control",
  //     "B. Test implementation and Execution",
  //     "C. Requirement Analysis",
  //     "D. Evaluating Exit criteria and reporting",
  //   ],
  //   answer: "C. Requirement Analysis",
  // },
  // //284
  // {
  //   question:
  //     "The structure of an incident report is covered in the Standard for Software Test Documentation IEEE 829 and is called as:",
  //   options: [
  //     "A. Anomaly Report",
  //     "B. Defect Report",
  //     "C. Test Defect Report",
  //     "D. Test Incident Report",
  //   ],
  //   answer: "A. Anomaly Report",
  // },
  // //285
  // {
  //   question:
  //     "Repeated Testing of an already tested program, after modification, to discover any defects introduced or uncovered as a result of the changes in the software being tested or in another related or unrelated software component:",
  //   options: [
  //     "A. Re Testing",
  //     "B. Confirmation Testing",
  //     "C. Regression Testing",
  //     "D. Negative Testing",
  //   ],
  //   answer: "C. Regression Testing",
  // },
  // //286
  // {
  //   question:
  //     "Consider the following state transition diagram of a switch. Which of the following represents an invalid state transition?",
  //   options: ["A. OFF to ON", "B. ON to OFF", "C. FAULT to ON"],
  //   answer: "C. FAULT to ON",
  // },
  // //287
  // {
  //   question:
  //     "We use the output of the requirement analysis, the requirement specification as the input for writing:",
  //   options: [
  //     "A. User Acceptance Test Cases",
  //     "B. Integration Level Test Cases",
  //     "C. Unit Level Test Cases",
  //     "D. Program specifications",
  //   ],
  //   answer: "A. User Acceptance Test Cases",
  // },
  // //288
  // {
  //   question:
  //     "Regression testing should be performed: \ni. Every week\nii. After the software has changed\niii. As often as possible\niv. When the environment has changed\nv. When the project manager says",
  //   options: [
  //     "A. i & ii are true, iii, iv & v are false",
  //     "B. ii, iii & iv are true, i & v are false",
  //     "C. ii & iv are true, i, iii & v are false",
  //     "D. ii is true, i, iii, iv & v are false",
  //   ],
  //   answer: "C. ii & iv are true, i, iii & v are false",
  // },
  // //289
  // {
  //   question:
  //     "Evaluating testability of the requirements and system are a part of which phase:",
  //   options: [
  //     "A. Test Analysis and Design",
  //     "B. Test Planning and control",
  //     "C. Test Implementation and execution",
  //     "D. Evaluating exit criteria and reporting",
  //   ],
  //   answer: "A. Test Analysis and Design",
  // },
  // //290
  // {
  //   question:
  //     "Which of the following has highest level of independence in which test cases are:",
  //   options: [
  //     "A. Designed by persons who write the software under test",
  //     "B. Designed by a person from a different section",
  //     "C. Designed by a person from a different organization",
  //     "D. Designed by another person",
  //   ],
  //   answer: "C. Designed by a person from a different organization",
  // },
  // //291
  // {
  //   question:
  //     "Test planning has which of the following major tasks? \ni. Determining the scope and risks, and identifying the objectives of testing.\nii. Determining the test approach (techniques,test items, coverage, identifying and interfacing the teams involved in testing , testware)\niii. Reviewing the Test Basis (such as requirements,architecture,design,interface)\niv. Determining the exit criteria.",
  //   options: [
  //     "A. i, ii, iv are true and iii is false",
  //     "B. i, iv are true and ii is false",
  //     "C. i, ii are true and iii, iv are false",
  //     "D. ii, iii, iv are true and i is false",
  //   ],
  //   answer: "A. i, ii, iv are true and iii is false",
  // },
  // //292
  // {
  //   question:
  //     "Deciding How much testing is enough should take into account: \ni. Level of Risk including Technical and Business product and project risk\nii. Project constraints such as time and budget\niii. Size of Testing Team\niv. Size of the Development Team",
  //   options: [
  //     "A. i, ii, iii are true and iv is false",
  //     "B. i, iv are true and ii is false",
  //     "C. i, ii are true and iii, iv are false",
  //     "D. ii, iii, iv are true and i is false",
  //   ],
  //   answer: "C. i, ii are true and iii, iv are false",
  // },
  // //293
  // {
  //   question: "Which of the following will be the best definition for Testing:",
  //   options: [
  //     "A. The goal / purpose of testing is to demonstrate that the program works.",
  //     "B. The purpose of testing is to demonstrate that the program is defect free.",
  //     "C. The purpose of testing is to demonstrate that the program does what it is supposed to do.",
  //     "D. Testing is executing Software for the purpose of finding defects.",
  //   ],
  //   answer:
  //     "D. Testing is executing Software for the purpose of finding defects.",
  // },
  // //294
  // {
  //   question:
  //     'Minimum Tests Required for Statement Coverage and Branch Coverage: \nRead P\nRead Q\nIf p+q > 100 then\nPrint "Large"\nEnd if\nIf p > 50 then\nPrint "pLarge"\nEnd if',
  //   options: [
  //     "A. Statement coverage is 2, Branch Coverage is 2",
  //     "B. Statement coverage is 3 and branch coverage is 2",
  //     "C. Statement coverage is 1 and branch coverage is 2",
  //     "D. Statement Coverage is 4 and Branch coverage is 2",
  //   ],
  //   answer: "C. Statement coverage is 1 and branch coverage is 2",
  // },
  // //295
  // {
  //   question:
  //     "Match every stage of the software Development Life cycle with the Testing Life cycle: \ni. Hi-level design a Unit tests\nii. Code b Acceptance tests\niii. Low-level design c System tests\niv. Business requirements d Integration tests",
  //   options: [
  //     "A. i-d, ii-a, iii-c, iv-b",
  //     "B. i-c, ii-d, iii-a, iv-b",
  //     "C. i-b, ii-a, iii-d, iv-c",
  //     "D. i-c, ii-a, iii-d, iv-b",
  //   ],
  //   answer: "D. i-c, ii-a, iii-d, iv-b",
  // },
  // //296
  // {
  //   question:
  //     "Which of the following is a part of Test Closure Activities? \ni. Checking which planned deliverables have been delivered\nii. Defect report analysis.\niii. Finalizing and archiving testware.\niv. Analyzing lessons.",
  //   options: [
  //     "A. i, ii, iv are true and iii is false",
  //     "B. i, ii, iii are true and iv is false",
  //     "C. i, iii, iv are true and ii is false",
  //     "D. All of above are true",
  //   ],
  //   answer: "C. i, iii, iv are true and ii is false",
  // },
  // //297
  // {
  //   question: "Which of the following is NOT part of a high level test plan?",
  //   options: [
  //     "A. Functions not to be tested.",
  //     "B. Environmental requirements.",
  //     "C. Analysis of Specifications.",
  //     "D. Entry and Exit criteria.",
  //   ],
  //   answer: "C. Analysis of Specifications.",
  // },
  // //298
  // {
  //   question:
  //     "If a candidate is given an exam of 40 questions, should get 25 marks to pass (61%) and should get 80% for distinction, what is equivalence class.",
  //   options: [
  //     "A. 23, 24, 25",
  //     "B. 0, 12, 25",
  //     "C. 30, 36, 39",
  //     "D. 32, 37, 40",
  //   ],
  //   answer: "D. 32, 37, 40",
  // },
  // //299
  // {
  //   question: "Which of the following statements is true of static analysis:",
  //   options: [
  //     "A. Compiling code is not a form of static analysis.",
  //     "B. Static analysis need not be performed before imperative code is executed.",
  //     "C. Static analysis can find faults that are hard to find with dynamic testing.",
  //     "D. Extensive statistic analysis will not be needed if white- Box testing is to be performed.",
  //   ],
  //   answer: "A. Compiling code is not a form of static analysis.",
  // },
  // //300
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid: An employee has $4000 of salary tax free. The next $1500 is taxed at 10% The next $28000 is taxed at 22% Any further amount is taxed at 40% \nWhich of these groups of numbers would fall into the same equivalence class?",
  //   options: [
  //     "A. $5800; $28000; $32000",
  //     "B. $0; $200; $4200",
  //     "C. $5200; $5500; $28000",
  //     "D. $28001; $32000; $35000",
  //   ],
  //   answer: "A. $5800; $28000; $32000",
  // },
  // //301
  // {
  //   question: "Cost of the reviews will not include.",
  //   options: [
  //     "A. Review process itself",
  //     "B. Metrics analysis",
  //     "C. Tool support.",
  //     "D. Process improvement.",
  //   ],
  //   answer: "C. Tool support.",
  // },
  // //302
  // {
  //   question: "Regression testing always involves",
  //   options: [
  //     "A. Testing whether a known software fault been fixed.",
  //     "B. Executing a large number of different tests.",
  //     "C. Testing whether modifications have introduced adverse side effects.",
  //     "D. Using a test automation tool.",
  //   ],
  //   answer:
  //     "C. Testing whether modifications have introduced adverse side effects.",
  // },
  // //303
  // {
  //   question:
  //     "Capture and replay facilities are least likely to be used to _______",
  //   options: [
  //     "A. Performance testing",
  //     "B. Recovery testing",
  //     "C. GUI testing",
  //     "D. User requirements.",
  //   ],
  //   answer: "D. User requirements.",
  // },
  // //304
  // {
  //   question:
  //     "Which tool will be used to test the flag memory leaks and unassigned pointers",
  //   options: [
  //     "A. Dynamic analysis tool",
  //     "B. Static Analysis tool.",
  //     "C. Maintenance tool.",
  //     "D. Configuration tool.",
  //   ],
  //   answer: "A. Dynamic analysis tool",
  // },
  // //305
  // {
  //   question: "Cyclomatic complexity is used to calculate",
  //   options: [
  //     "A. Number of independent paths in the basis set of a program",
  //     "B. Number of binary decisions + 1",
  //     "C. Number bound for the number of tests that must be conducted to ensure that all statements have been executed at least once",
  //     "D. Number of branches and decisions",
  //   ],
  //   answer: "B. Number of binary decisions + 1",
  // },
  // //306
  // {
  //   question: "Which of the following is not included in Test Plan.",
  //   options: [
  //     "A. Features to be tested.",
  //     "B. Environmental needs.",
  //     "C. Suspension criteria.",
  //     "D. Expected results.",
  //   ],
  //   answer: "D. Expected results.",
  // },
  // //307
  // {
  //   question: "Software quality is not relevant to _______",
  //   options: [
  //     "A. Correctness",
  //     "B. Usability",
  //     "C. Viability",
  //     "D. Reusability.",
  //   ],
  //   answer: "C. Viability",
  // },
  // //308
  // {
  //   question:
  //     "Match the following:\n1. Test estimation\n2. Test control\n3. Test monitoring\na. Measures of tracking process\nb. Effort required to perform activities\nc. Reallocation of resources",
  //   options: [
  //     "A. 1-b, 2-c, 3-a",
  //     "B. 1-b, 2-a, 3-c",
  //     "C. 1-c, 2-a, 3-b",
  //     "D. 1-a, 2-b, 3-c",
  //   ],
  //   answer: "A. 1-b, 2-c, 3-a",
  // },
  // //309
  // {
  //   question: "When do you stop testing?",
  //   options: [
  //     "A. When the specified number of faults are found.",
  //     "B. When the test completion criteria are met.",
  //     "C. When all high and medium priority tests are complete.",
  //     "D. When all statements have been executed",
  //   ],
  //   answer: "B. When the test completion criteria are met.",
  // },
  // //310
  // {
  //   question:
  //     "What is the smallest number of test cases required to Provide 100% branch coverage?\nIf(x>y) x=x+1;\nelse y=y+1;\nwhile(x>y)\n{\ny=x*y; x=x+1;\n}",
  //   options: ["A. 1", "B. 2", "C. 3", "D. 4"],
  //   answer: "B. 2",
  // },
  // //311
  // {
  //   question:
  //     "Match the following.\n1. Configuration identification\n2. Configuration control\n3. Status reporting\n4. Configuration auditing\na. Maintains of CI’s in a library\nb. Checks on the contents of the library\nc. Function recording and tracking problems.\nd. Requires the all CI’s and their versions in the system are known",
  //   options: [
  //     "A. 1-d, 2-c, 3-d, 4-a.",
  //     "B. 1-d, 2-a, 3-c, 4-b.",
  //     "C. 1-a, 2-b, 3-d, 4-c.",
  //     "D. 1-c, 2-b, 3-a, 4-d.",
  //   ],
  //   answer: "B. 1-d, 2-a, 3-c, 4-b.",
  // },
  // //312
  // {
  //   question: "Integration testing in the large involves:",
  //   options: [
  //     "A. Testing the system when combined with other systems.",
  //     "B. Testing a sub-system using stubs and drivers.",
  //     "C. Testing a system with a large number of users.",
  //     "D. Combing software components and testing them in one go.",
  //   ],
  //   answer: "A. Testing the system when combined with other systems.",
  // },
  // //313
  // {
  //   question:
  //     "One of the following is not a part of white box testing as per BS7925-II standards.",
  //   options: [
  //     "A. Random testing",
  //     "B. Data Flow testing.",
  //     "C. Statement testing.",
  //     "D. Syntax testing.",
  //   ],
  //   answer: "D. Syntax testing.",
  // },
  // //314
  // {
  //   question:
  //     "A piece of software has been given _______what tests in the Following will you perform?\n1) Test the areas most critical to business processes\n2) Test the areas where faults will be maximum\n3) Test the easiest functionalities",
  //   options: [
  //     "A. 1&2 are true and 3 is false.",
  //     "B. 1,2&3 are true.",
  //     "C. 1 is true, 2&3 are false.",
  //     "D. 1&2 are false, 3 is true",
  //   ],
  //   answer: "A. 1&2 are true and 3 is false.",
  // },
  // //315
  // {
  //   question: "Which of the following is a type of non-functional testing?",
  //   options: [
  //     "A. Usability testing.",
  //     "B. Statement Coverage.",
  //     "C. Dataflow testing.",
  //     "D. Cause-effect graphing.",
  //   ],
  //   answer: "A. Usability testing.",
  // },
  // //316
  // {
  //   question:
  //     "What type of testing will you perform on internet banking solution?",
  //   options: [
  //     "A. System integration",
  //     "B. Functional testing",
  //     "C. Non-functional testing.",
  //     "D. Requirements testing",
  //   ],
  //   answer: "C. Non-functional testing.",
  // },
  // //317
  // {
  //   question: "Which of the following are false?",
  //   options: [
  //     "A. Incidents should always be investigated and resolved.",
  //     "B. Incidents occur when expected and actual results differ.",
  //     "C. Incidents can be analyzed to assist in test process improvement.",
  //     "D. An incident can be raised against documentation.",
  //   ],
  //   answer:
  //     "C. Incidents can be analyzed to assist in test process improvement.",
  // },
  // //318
  // {
  //   question: "Testing is not done to ______",
  //   options: [
  //     "A. Find faults",
  //     "B. Improve quality",
  //     "C. Check user friendliness.",
  //     "D. Improve software accuracy",
  //   ],
  //   answer: "D. Improve software accuracy",
  // },
  // //319
  // {
  //   question:
  //     "A field failure occurs when multiple users access a system. Which of the following is true?",
  //   options: [
  //     "A. This is an acceptable risk of a multi-user system.",
  //     "B. Insufficient functional testing has been performed.",
  //     "C. This indicates an important non-functional requirement was not specified and tested.",
  //     "D. It is not possible to test against such events prior to release.",
  //   ],
  //   answer:
  //     "C. This indicates an important non-functional requirement was not specified and tested.",
  // },
  // //320
  // {
  //   question: "People who don’t participate in technical reviews",
  //   options: ["A. Analysts", "B. Management", "C. Developers", "D. Testers"],
  //   answer: "B. Management",
  // },
  // //321
  // {
  //   question: "What is failure?",
  //   options: [
  //     "A. Deviation from expected result to actual result",
  //     "B. Defect in the software.",
  //     "C. Error in the program code.",
  //     "D. Fault in the system.",
  //   ],
  //   answer: "A. Deviation from expected result to actual result",
  // },
  // //322
  // {
  //   question: "Exclusive use of white box testing in a test-phase will:",
  //   options: [
  //     "A. Ensure the test item is adequately tested.",
  //     "B. Make the need for black-box testing redundant.",
  //     "C. Run the risk that the requirements are not satisfied.",
  //     "D. Suffices for the unit testing phase.",
  //   ],
  //   answer: "C. Run the risk that the requirements are not satisfied.",
  // },
  // //323
  // {
  //   question: "Which of the following is least important in test management?",
  //   options: [
  //     "A. Estimating test duration.",
  //     "B. Incident Management.",
  //     "C. Configuration Management.",
  //     "D. De-bugging.",
  //   ],
  //   answer: "D. De-bugging.",
  // },
  // //324
  // {
  //   question: "A standard for software testing terminology is:",
  //   options: ["A. IEEE 802.11", "B. ISO 9001", "C. BS 7925-1", "D. BS 7925-2"],
  //   answer: "C. BS 7925-1",
  // },
  // //325
  // {
  //   question:
  //     "Which of the following is NOT a characteristic of User Acceptance Testing?",
  //   options: [
  //     "A. Use of automated test execution tools.",
  //     "B. Testing performed by users.",
  //     "C. Testing against acceptance test criteria.",
  //     "D. Integration of system with user documentation.",
  //   ],
  //   answer: "A. Use of automated test execution tools.",
  // },
  // //326
  // {
  //   question:
  //     "Which of the following provides the biggest potential cost saving from use of CAST?",
  //   options: [
  //     "A. Test management",
  //     "B. Test design",
  //     "C. Test planning",
  //     "D. Test execution",
  //   ],
  //   answer: "D. Test execution",
  // },
  // //327
  // {
  //   question:
  //     "What type of testing is done to supplement the rigorous testing?",
  //   options: [
  //     "A. Regression testing.",
  //     "B. Integration testing.",
  //     "C. Error Guessing",
  //     "D. System testing.",
  //   ],
  //   answer: "C. Error Guessing",
  // },
  // //328
  // {
  //   question: "To make a test effective it is most important that:",
  //   options: [
  //     "A. It is easy to execute.",
  //     "B. It is designed to detect faults if present.",
  //     "C. The expected outcome is specified before execution.",
  //     "D. It is unlikely to delay progress.",
  //   ],
  //   answer: "C. The expected outcome is specified before execution.",
  // },
  // //329
  // {
  //   question: "Error guessing is:",
  //   options: [
  //     "A. An appropriate way of deriving system tests.",
  //     "B. Only used if good requirements are not available.",
  //     "C. Only used when good requirements are available.",
  //     "D. The most appropriate way of deriving system tests.",
  //   ],
  //   answer: "D. The most appropriate way of deriving system tests.",
  // },
  // //330
  // {
  //   question: "Amount of testing performed will not depend on",
  //   options: [
  //     "A. Risks involved",
  //     "B. Contractual requirements",
  //     "C. Legal requirements",
  //     "D. Test data.",
  //   ],
  //   answer: "D. Test data.",
  // },
  // //331
  // {
  //   question: "For software to be reliable it must:",
  //   options: [
  //     "A. Be easy to maintain.",
  //     "B. Be unlikely to cause a failure.",
  //     "C. Never fail under any circumstances.",
  //     "D. Be written according to coding standards",
  //   ],
  //   answer: "B. Be unlikely to cause a failure.",
  // },
  // //332
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid: An employee has $4000 of salary tax free. The next $1500 is taxed at 10% The next $28000 is taxed at 22% Any further amount is taxed at 40%\n To the nearest $ which of these is a valid Boundary Value Analysis test case?",
  //   options: ["A. $1500", "B. $32001", "C. $28000", "D. $33501"],
  //   answer: "D. $33501",
  // },
  // //333
  // {
  //   question: "Faults found by users are due to:",
  //   options: [
  //     "A. Poor quality software",
  //     "B. Poor software and poor testing",
  //     "C. Bad luck",
  //     "D. Insufficient time for testing",
  //   ],
  //   answer: "B. Poor software and poor testing",
  // },
  // //334
  // {
  //   question: "An incident logging system",
  //   options: [
  //     "A. Only records defects",
  //     "B. Is of limited value",
  //     "C. Is a valuable source of project information during testing if it contains all incidents",
  //     "D. Should be used only by the test team.",
  //   ],
  //   answer:
  //     "C. Is a valuable source of project information during testing if it contains all incidents",
  // },
  // //335
  // {
  //   question:
  //     "The later in the development life cycle a fault is discovered, the more expensive it is to fix. Why?",
  //   options: [
  //     "A. The documentation is poor, so it takes longer to find out what the software is doing.",
  //     "B. Wages are rising",
  //     "C. The fault has been built into more documentation,code,tests, etc",
  //     "D. None of the above",
  //   ],
  //   answer:
  //     "C. The fault has been built into more documentation,code,tests, etc",
  // },
  // //336
  // {
  //   question: "Which of the following is true?",
  //   options: [
  //     "A. Component testing should be black box, system testing should be white box.",
  //     "B. If you find a lot of bugs in testing, you should not be very confident about the quality of software",
  //     "C. The fewer bugs you find, the better your testing was",
  //     "D. The more tests you run, the more bugs you will find.",
  //   ],
  //   answer:
  //     "B. If you find a lot of bugs in testing, you should not be very confident about the quality of software",
  // },
  // //337
  // {
  //   question:
  //     "If the pseudo code below were a programming language, how many tests are required to achieve 100% statement coverage?\n1. If x=3 then\n2. Display_messageX;\n3. If y=2 then\n4. Display_messageY;\n5. Else\n6. Display_messageZ;\n7. Else\n8. Display_messageZ;",
  //   options: ["A. 1", "B. 2", "C. 3", "D. 4"],
  //   answer: "C. 3",
  // },
  // //338
  // {
  //   question: "Software testing activities should start",
  //   options: [
  //     "A. As soon as the code is written",
  //     "B. During the design stage",
  //     "C. When the requirements have been formally documented",
  //     "D. As soon as possible in the development life cycle",
  //   ],
  //   answer: "D. As soon as possible in the development life cycle",
  // },
  // //339
  // {
  //   question:
  //     "Using the same code example as question 17, how many tests are required to achieve 100% branch/decision coverage?",
  //   options: ["A. 1", "B. 2", "C. 3", "D. 4"],
  //   answer: "C. 3",
  // },
  // //340
  // {
  //   question: "A test design technique is",
  //   options: [
  //     "A. A process for selecting test cases",
  //     "B. A process for determining expected outputs",
  //     "C. A way to measure the quality of software",
  //     "D. A way to measure in a test plan what has to be done",
  //   ],
  //   answer: "A. A process for selecting test cases",
  // },
  // //341
  // {
  //   question:
  //     "What is the main reason for testing software before releasing it?",
  //   options: [
  //     "A. To show that system will work after release",
  //     "B. To decide when the software is of sufficient quality to release",
  //     "C. To find as many bugs as possible before release",
  //     "D. To give information for a risk based decision about release",
  //   ],
  //   answer: "D. To give information for a risk based decision about release",
  // },
  // //342
  // {
  //   question: "Testware(test cases, test dataset)",
  //   options: [
  //     "A. Needs configuration management just like requirements, design and code",
  //     "B. Should be newly constructed for each new version of the software",
  //     "C. Is needed only until the software is released into production or use",
  //     "D. Does not need to be documented and commented, as it does not form part of the released software system",
  //   ],
  //   answer:
  //     "A. Needs configuration management just like requirements, design and code",
  // },
  // //343
  // {
  //   question: "Which of the following is NOT a standard related to testing?",
  //   options: ["A. IEEE829", "B. IEEE610", "C. BS7925-1", "D. BS7925-2"],
  //   answer: "B. IEEE610",
  // },
  // //344
  // {
  //   question: "In which order should tests be run?",
  //   options: [
  //     "A. The most important tests first",
  //     "B. The most difficult tests first (to allow maximum time for fixing)",
  //     "C. The easiest tests first (to give initial confidence)",
  //     "D. The order they are thought of",
  //   ],
  //   answer: "A. The most important tests first",
  // },
  // //345
  // {
  //   question:
  //     "A program validates a numeric field as follows:\n Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following covers the MOST boundary values?",
  //   options: [
  //     "A. 9,10,11,22",
  //     "B. 9,10,21,22",
  //     "C. 10,11,21,22",
  //     "D. 10,11,20,21",
  //   ],
  //   answer: "B. 9,10,21,22",
  // },
  // //346
  // {
  //   question: "Which of the following is not the integration strategy?",
  //   options: ["A. Design based", "B. Big-bang", "C. Bottom-up", "D. Top-down"],
  //   answer: "A. Design based",
  // },
  // //347
  // {
  //   question:
  //     "Which of the following tools would you use to detect a memory leak?",
  //   options: [
  //     "A. State analysis",
  //     "B. Coverage analysis",
  //     "C. Dynamic analysis",
  //     "D. Memory analysis",
  //   ],
  //   answer: "C. Dynamic analysis",
  // },
  // //348
  // {
  //   question: "Which of the following statements are true?",
  //   options: [
  //     "A. Faults in program specifications are the most expensive to fix.",
  //     "B. Faults in code are the most expensive to fix.",
  //     "C. Faults in requirements are the most expensive to fix",
  //     "D. Faults in designs are the most expensive to fix.",
  //   ],
  //   answer: "C. Faults in requirements are the most expensive to fix",
  // },
  // //349
  // {
  //   question:
  //     "Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:",
  //   options: [
  //     "A. Reducing test time",
  //     "B. No change",
  //     "C. Increasing test time",
  //     "D. Can’t say",
  //   ],
  //   answer: "A. Reducing test time",
  // },
  // //350
  // {
  //   question: "Which of the following is a black box design technique?",
  //   options: [
  //     "A. Statement testing",
  //     "B. Equivalence partitioning",
  //     "C. Error- guessing",
  //     "D. Usability testing",
  //   ],
  //   answer: "B. Equivalence partitioning",
  // },
  // //351
  // {
  //   question: "When reporting faults found to developers, testers should be:",
  //   options: [
  //     "A. As polite, constructive and helpful as possible",
  //     'B. Firm about insisting that a bug is not a "feature" if it should be fixed',
  //     "C. Diplomatic, sensitive to the way they may react to criticism",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //352
  // {
  //   question: "Which of the following statements is not true",
  //   options: [
  //     "A. Performance testing can be done during unit testing as well as during the testing of whole system",
  //     "B. The acceptance test does not necessarily include a regression test",
  //     "C. Verification activities should not involve testers (reviews, inspections etc)",
  //     "D. Test environments should be as similar to production environments as possible",
  //   ],
  //   answer:
  //     "C. Verification activities should not involve testers (reviews, inspections etc)",
  // },
  // //353
  // {
  //   question:
  //     "What is the important criterion in deciding what testing technique to use?",
  //   options: [
  //     "A. How well you know a particular technique",
  //     "B. The objective of the test",
  //     "C. How appropriate the technique is for testing the application",
  //     "D. Whether there is a tool to support the technique",
  //   ],
  //   answer: "B. The objective of the test",
  // },
  // //354
  // {
  //   question: "When should you stop testing?",
  //   options: [
  //     "A. When time for testing has run out.",
  //     "B. When all planned tests have been run",
  //     "C. When the test completion criteria have been met",
  //     "D. When no faults have been found by the tests run",
  //   ],
  //   answer: "C. When the test completion criteria have been met",
  // },
  // //355
  // {
  //   question: "Coverage measurement",
  //   options: [
  //     "A. Is nothing to do with testing",
  //     "B. Is a partial measure of test thoroughness",
  //     "C. Branch coverage should be mandatory for all software",
  //     "D. Can only be applied at unit or module testing, not at system testing",
  //   ],
  //   answer: "B. Is a partial measure of test thoroughness",
  // },
  // //356
  // {
  //   question: "Which of the following is NOT a type of non-functional test?",
  //   options: [
  //     "A. State-Transition",
  //     "B. Usability",
  //     "C. Performance",
  //     "D. Security",
  //   ],
  //   answer: "A. State-Transition",
  // },
  // //357
  // {
  //   question: "Which of the following is the component test standard?",
  //   options: ["A. IEEE 829", "B. IEEE 610", "C. BS7925-1", "D. BS7925-2"],
  //   answer: "D. BS7925-2",
  // },
  // //358
  // {
  //   question:
  //     "A program validates a numeric field as follows:\n Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following input values cover all of the equivalence partitions?",
  //   options: ["A. 10,11,21", "B. 3,20,21", "C. 3,10,22", "D. 10,21,22"],
  //   answer: "C. 3,10,22",
  // },
  // //359
  // {
  //   question: "Which is not true-The black box tester",
  //   options: [
  //     "A. Should be able to understand a functional specification or requirements document",
  //     "B. Should be able to understand the source code.",
  //     "C. Is highly motivated to find faults",
  //     "D. Is creative to find the system’s weaknesses",
  //   ],
  //   answer: "B. Should be able to understand the source code.",
  // },
  // //360
  // {
  //   question: "Which of the following is a static test?",
  //   options: [
  //     "A. Code inspection",
  //     "B. Coverage analysis",
  //     "C. Usability assessment",
  //     "D. Installation test",
  //   ],
  //   answer: "A. Code inspection",
  // },
  // //361
  // {
  //   question:
  //     "A program with high cyclometic complexity is almost likely to be:",
  //   options: [
  //     "A. Large",
  //     "B. Small",
  //     "C. Difficult to write",
  //     "D. Difficult to test",
  //   ],
  //   answer: "D. Difficult to test",
  // },
  // //362
  // {
  //   question: "Which of the following is the odd one out?",
  //   options: ["A. White box", "B. Glass box", "C. Structural", "D. Functional"],
  //   answer: "D. Functional",
  // },
  // //363
  // {
  //   question: "Which of the following techniques are black box techniques?",
  //   options: [
  //     "A. State transition testing, code testing, agile testing",
  //     "B. Equivalence partitioning, state transition testing, decision table testing",
  //     "C. System testing, acceptance testing, equivalence partitioning",
  //     "D. System integration testing, system testing, decision table testing",
  //   ],
  //   answer:
  //     "B. Equivalence partitioning, state transition testing, decision table testing",
  // },
  // //364
  // {
  //   question:
  //     "A number of critical bugs are fixed in software. All the bugs are in one module, related to reports. The test manager decides to do regression testing only on the reports module.",
  //   options: [
  //     "A. The test manager should do only automated regression testing.",
  //     "B. The test manager is justified in her decision because no bug has been fixed in other modules",
  //     "C. The test manager should only do confirmation testing. There is no need to do regression testing",
  //     "D. Regression testing should be done on other modules as well because fixing one module may affect other modules",
  //   ],
  //   answer:
  //     "D. Regression testing should be done on other modules as well because fixing one module may affect other modules",
  // },
  // //365
  // {
  //   question:
  //     "Which of the following statements contains a valid goal for a functional test set?",
  //   options: [
  //     "A. A goal is that no more failures will result from the remaining defects",
  //     "B. A goal is to find as many failures as possible so that the cause of the failures can be identified and fixed",
  //     "C. A goal is to eliminate as much as possible the causes of defects",
  //     "D. A goal is to fulfil all requirements for testing that are defined in the project plan.",
  //   ],
  //   answer:
  //     "B. A goal is to find as many failures as possible so that the cause of the failures can be identified and fixed",
  // },
  // //366
  // {
  //   question: "What makes an inspection different from other review types?",
  //   options: [
  //     "A. It is led by a trained leader, uses formal entry and exit criteria and checklists",
  //     "B. It is led by the author of the document to be inspected",
  //     "C. It can only be used for reviewing design and code",
  //     "D. It is led by the author, uses checklists, and collects data for improvement",
  //   ],
  //   answer:
  //     "A. It is led by a trained leader, uses formal entry and exit criteria and checklists",
  // },
  // //367
  // {
  //   question: "Why does the boundary value analysis provide good test cases?",
  //   options: [
  //     "A. Because it is an industry standard",
  //     "B. Because errors are frequently made during programming of the different cases near the ‘edges’ of the range of values",
  //     "C. Because only equivalence classes that are equal from a functional point of view are considered in the test cases",
  //     "D. Because the test object is tested under maximal load up to its performance limits",
  //   ],
  //   answer:
  //     "B. Because errors are frequently made during programming of the different cases near the ‘edges’ of the range of values",
  // },
  // //368
  // {
  //   question:
  //     "If a program is tested and 100% branch coverage is achieved, which of the following coverage criteria is then guaranteed to be achieved?",
  //   options: [
  //     "A. 100% Equivalence class coverage",
  //     "B. 100% Condition coverage and 100% Statement coverage",
  //     "C. 100% Statement coverage",
  //     "D. 100% Multiple condition coverage",
  //   ],
  //   answer: "B. 100% Condition coverage and 100% Statement coverage",
  // },
  // //369
  // {
  //   question:
  //     "A defect management system shall keep track of the status of every defect registered and enforce the rules about changing these states. If your task is to test the status tracking, which method would be best?",
  //   options: [
  //     "A. Logic-based testing",
  //     "B. Use-case-based testing",
  //     "C. State transition testing",
  //     "D. Systematic testing according to the V-model",
  //   ],
  //   answer: "C. State transition testing",
  // },
  // //370
  // {
  //   question: "In system testing...",
  //   options: [
  //     "A. Both functional and non-functional requirements are to be tested",
  //     "B. Only functional requirements are tested; non-functional requirements are validated in a review",
  //     "C. Only non-functional requirements are tested; functional requirements are validated in a review",
  //     "D. Only requirements which are listed in the specification document are to be tested",
  //   ],
  //   answer:
  //     "A. Both functional and non-functional requirements are to be tested",
  // },
  // //371
  // {
  //   question:
  //     "Integration testing has following characteristics:\nI. It can be done in incremental manner\nII. It is always done after system testing\nIII. It includes functional tests\nIV. It includes non-functional tests",
  //   options: [
  //     "A. I, II and III are correct",
  //     "B. I is correct",
  //     "C. I, III and IV are correct",
  //   ],
  //   answer: "C. I, III and IV are correct",
  // },
  // //372
  // {
  //   question:
  //     "Which of the following activities differentiate a walkthrough from a formal review?",
  //   options: [
  //     "A. A walkthrough does not follow a defined process",
  //     "B. For a walkthrough individual preparation by the reviewers is optional",
  //     "C. A walkthrough requires meeting",
  //     "D. A walkthrough finds the causes of failures, while formal review finds the failures",
  //   ],
  //   answer:
  //     "B. For a walkthrough individual preparation by the reviewers is optional",
  // },
  // //373
  // {
  //   question: "Why is testing necessary?",
  //   options: [
  //     "A. Because testing is good method to make there are not defects in the software",
  //     "B. Because verification and validation are not enough to get to know the quality of the software",
  //     "C. Because testing measures the quality of the software system and helps to increase the quality",
  //     "D. Because testing finds more defects than reviews and inspections.",
  //   ],
  //   answer:
  //     "C. Because testing measures the quality of the software system and helps to increase the quality",
  // },
  // //374
  // {
  //   question:
  //     "In foundation level syllabus you will find the main basic principles of testing. Which of the following sentences describes one of these basic principles?",
  //   options: [
  //     "A. Complete testing of software is attainable if you have enough resources and test tools",
  //     "B. With automated testing you can make statements with more confidence about the quality of a product than with manual testing",
  //     "C. For a software system, it is not possible, under normal conditions, to test all input and output combinations.",
  //     "D. A goal of testing is to show that the software is defect free.",
  //   ],
  //   answer:
  //     "C. For a software system, it is not possible, under normal conditions, to test all input and output combinations.",
  // },
  // //375
  // {
  //   question: "Which of the following is true",
  //   options: [
  //     "A. Testing is the same as quality assurance",
  //     "B. Testing is a part of quality assurance",
  //     "C. Testing is not a part of quality assurance",
  //     "D. Testing is same as debugging",
  //   ],
  //   answer: "B. Testing is a part of quality assurance",
  // },
  // //376
  // {
  //   question:
  //     "This part of a program is given:\nWHILE (condition A) Do B\nEND WHILE\nHow many decisions should be tested in this code in order to achieve 100% decision coverage?",
  //   options: ["A. 2", "B. Indefinite", "C. 1", "D. 4"],
  //   answer: "A. 2",
  // },
  // //377
  // {
  //   question:
  //     "In a flight reservation system, the number of available seats in each plane model is an input. A plane may have any positive number of available seats, up to the given capacity of the plane. Using Boundary Value analysis, a list of available – seat values were generated. Which of the following lists is correct?",
  //   options: [
  //     "A. 1, 2, capacity -1, capacity, capacity plus 1",
  //     "B. 0, 1, capacity, capacity plus 1",
  //     "C. 0, 1, 2, capacity plus 1, a very large number",
  //     "D. 0, 1, 10, 100, capacity, capacity plus one",
  //   ],
  //   answer: "B. 0, 1, capacity, capacity plus 1",
  // },
  // //378
  // {
  //   question:
  //     "Which of the following is a valid collection of equivalence classes for the following problem: An integer field shall contain values from and including 1 to and including 15",
  //   options: [
  //     "A. Less than 1, 1 through 15, more than 15",
  //     "B. Negative numbers, 1 through 15, above 15",
  //     "C. Less than 1, 1 through 14, more than 15",
  //     "D. Less than 0, 1 through 14, 15 and more",
  //   ],
  //   answer: "A. Less than 1, 1 through 15, more than 15",
  // },
  // //379
  // {
  //   question: "Which of the following is correct about static analysis tools",
  //   options: [
  //     "A. They help you find defects rather than failures",
  //     "B. They are used by developers only",
  //     "C. They require compilation of code",
  //     "D. They are useful only for regulated industries",
  //   ],
  //   answer: "A. They help you find defects rather than failures",
  // },
  // //380
  // {
  //   question:
  //     "Which of the following is most often considered as components interface bug?",
  //   options: [
  //     "A. For two components exchanging data, one component used metric units, the other one used British units",
  //     "B. The system is difficult to use due to a too complicated terminal input structure",
  //     "C. The messages for user input errors are misleading and not helpful for understanding the input error cause",
  //     "D. Under high load, the system does not provide enough open ports to connect to",
  //   ],
  //   answer:
  //     "A. For two components exchanging data, one component used metric units, the other one used British units",
  // },
  // //381
  // {
  //   question: "Which of the following is correct about static analysis tools?",
  //   options: [
  //     "A. Static analysis tools are used only by developers",
  //     "B. Compilers may offer some support for static analysis",
  //     "C. Static analysis tools help find failures rather than defects",
  //     "D. Static analysis tools require execution of the code to analyze the coverage",
  //   ],
  //   answer: "B. Compilers may offer some support for static analysis",
  // },
  // //382
  // {
  //   question: "Which of the following list contains only non-functional tests?",
  //   options: [
  //     "A. Interoperability (compatibility) testing, reliability testing, performance testing",
  //     "B. System testing, performance testing",
  //     "C. Load testing, stress testing, component testing, portability testing",
  //     "D. Testing various configurations, beta testing, load testing",
  //   ],
  //   answer:
  //     "C. Load testing, stress testing, component testing, portability testing",
  // },
  // //383
  // {
  //   question:
  //     "Which set of metrics can be used for monitoring of the test execution?",
  //   options: [
  //     "A. Number of detected defects, testing cost;",
  //     "B. Number of residual defects in the test object.",
  //     "C. Percentage of completed tasks in the preparation of test environment; test cases prepared",
  //     "D. Number of test cases run / not run; test cases passed / failed",
  //   ],
  //   answer: "D. Number of test cases run / not run; test cases passed / failed",
  // },
  // //384
  // {
  //   question: "What test items should be put under configuration management?",
  //   options: [
  //     "A. The test object, the test material and the test environment",
  //     "B. The problem reports and the test material",
  //     "C. Only the test object. The test cases need to be adapted during agile testing",
  //     "D. The test object and the test material",
  //   ],
  //   answer: "A. The test object, the test material and the test environment",
  // },
  // //385
  // {
  //   question:
  //     "This part of a program is given:\nWHILE (condition A)\nDo B\nEND WHILE\nHow many paths should be tested in this code in order to achieve 100% path coverage?",
  //   options: ["A. One", "B. Indefinite", "C. Two", "D. Four"],
  //   answer: "C. Two",
  // },
  // //386
  // {
  //   question: "What is the purpose of test exit criteria in the test plan?",
  //   options: [
  //     "A. To specify when to stop the testing activity",
  //     "B. To set the criteria used in generating test inputs",
  //     "C. To ensure that the test case specification is complete",
  //     "D. To know when a specific test has finished its execution",
  //   ],
  //   answer: "A. To specify when to stop the testing activity",
  // },
  // //387
  // {
  //   question:
  //     "If a program is tested and 100% condition coverage is achieved, which of the following coverage criteria is then guaranteed to be achieved?",
  //   options: [
  //     "A. 100% branch coverage",
  //     "B. 100% condition coverage and 100% statement coverage",
  //     "C. Equivalence class and boundary value coverage",
  //     "D. No other white box coverage criterion is guaranteed to be fulfilled 100%",
  //   ],
  //   answer: "B. 100% condition coverage and 100% statement coverage",
  // },
  // //388
  // {
  //   question:
  //     "Which of the following can be root cause of a bug in a software product?\n(I) The project had incomplete procedures for configuration management.\n(II) The time schedule to develop a certain component was cut.\n(III) the specification was unclear\n(IV) Use of the code standard was not followed up\n(V) The testers were not certified",
  //   options: [
  //     "A. (I) and (II) are correct",
  //     "B. (I) through (IV) are correct",
  //     "C. (III) through (V) are correct",
  //     "D. (I), (II) and (IV) are correct",
  //   ],
  //   answer: "B. (I) through (IV) are correct",
  // },
  // //389
  // {
  //   question:
  //     "The following list contains risks that have been identified for a software product to be developed. Which of these risks is an example of a product risk?",
  //   options: [
  //     "A. Not enough qualified testers to complete the planned tests",
  //     "B. Software delivery is behind schedule",
  //     "C. Threat to a patient’s life",
  //     "D. 3rd party supplier does not supply as stipulated",
  //   ],
  //   answer: "C. Threat to a patient’s life",
  // },
  // //390
  // {
  //   question: "Which of the following statements is correct?",
  //   options: [
  //     "A. Static analysis tools produce statistics during program execution",
  //     "B. Configuration management systems allow us to provide accurate defect statistics of different configurations",
  //     "C. Stress testing tools examine the behavior of the test object at or beyond full load",
  //     "D. Performance measurement tools can be used in all phases of software life-cycle",
  //   ],
  //   answer:
  //     "C. Stress testing tools examine the behavior of the test object at or beyond full load",
  // },
  // //391
  // {
  //   question:
  //     "Which of the following project inputs influence testing?\n(I) Contractual requirements\n(II) Legal requirements\n(III) Industry standards\n(IV) Application risk\n(V) Project size",
  //   options: [
  //     "A. (I) through (III) are correct",
  //     "B. All alternatives are correct",
  //     "C. (II) and (V) are correct",
  //     "D. (I), (III) and (V) are correct",
  //   ],
  //   answer: "B. All alternatives are correct",
  // },
  // //392
  // {
  //   question:
  //     "A test engineer is testing a Video Player (VCR), and logs the following report:\nTitle: Fast Forward stops after 2 minutes. It happens every time\nExpected result: Fast forward continues till the end of the tape\nSeverity: High\nPriority: Urgent\nWhat important information did the engineer leave out?",
  //   options: [
  //     "A. Identification (Software and hardware) of the VCR",
  //     "B. Actual result",
  //     "C. History of the report",
  //     "D. Ideas for the test case improvement",
  //   ],
  //   answer: "A. Identification (Software and hardware) of the VCR",
  // },
  // //393
  // {
  //   question: "Maintenance testing is:",
  //   options: [
  //     "A. Testing management",
  //     "B. Synonym of testing the quality of service",
  //     "C. Triggered by modifications, migration or retirement of existing software",
  //     "D. Testing the level of maintenance by the vendor",
  //   ],
  //   answer:
  //     "C. Triggered by modifications, migration or retirement of existing software",
  // },
  // //394
  // {
  //   question:
  //     'Why is incremental integration preferred over "big bang" integration?',
  //   options: [
  //     "A. Because incremental integration has better early defects screening and isolation ability",
  //     'B. Because "big bang" integration is suitable only for real time applications',
  //     'C. Incremental integration is preferred over "Big Bang Integration" only for "bottom up" development model',
  //     "D. Because incremental integration can compensate for weak and inadequate component testing",
  //   ],
  //   answer:
  //     "A. Because incremental integration has better early defects screening and isolation ability",
  // },
  // //395
  // {
  //   question: "V-Model is:",
  //   options: [
  //     "A. A software development model that illustrates how testing activities integrate with software development phases",
  //     "B. A software life-cycle model that is not relevant for testing",
  //     "C. The official software development and testing life-cycle model of ISTQB",
  //     "D. A testing life cycle model including unit, integration, system and acceptance phases",
  //   ],
  //   answer:
  //     "A. A software development model that illustrates how testing activities integrate with software development phases",
  // },
  // //396
  // {
  //   question:
  //     "Which of the following items need not to be given in an incident report?",
  //   options: [
  //     "A. The version number of the test object",
  //     "B. Test data and used environment",
  //     "C. Identification of the test case that failed",
  //     "D. The location and instructions on how to correct the fault",
  //   ],
  //   answer: "D. The location and instructions on how to correct the fault",
  // },
  // //397
  // {
  //   question: "Test data planning essentially includes",
  //   options: [
  //     "A. Network",
  //     "B. Operational Model",
  //     "C. Boundary value analysis",
  //     "D. Test Procedure Planning",
  //   ],
  //   answer: "D. Test Procedure Planning",
  // },
  // //398
  // {
  //   question: "Acceptance testing means",
  //   options: [
  //     "A. Testing performed on a single stand – alone module or unit of code",
  //     "B. Testing after changes have been made to ensure that no unwanted changes were introduced",
  //     "C. Testing to ensure that the system meets the needs of the organization and end user.",
  //     "D. Users test the application in the developers environment",
  //   ],
  //   answer:
  //     "C. Testing to ensure that the system meets the needs of the organization and end user.",
  // },
  // //399
  // {
  //   question:
  //     "The _______ testing should include operational tests of the new environment as well as of the changed software",
  //   options: [
  //     "A. System Testing",
  //     "B. Integration testing",
  //     "C. Component testing",
  //     "D. Maintenance testing",
  //   ],
  //   answer: "D. Maintenance testing",
  // },
  // //400
  // {
  //   question:
  //     "A risk-based approach to testing provides proactive opportunities to reduce the levels of product risk, starting in the initial stages of a project",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //401
  // {
  //   question: "Functional testing is mostly",
  //   options: [
  //     "A. Validation techniques",
  //     "B. Verification techniques",
  //     "C. Both of the above",
  //     "D. None of the above",
  //   ],
  //   answer: "A. Validation techniques",
  // },
  // //402
  // {
  //   question: "Branch Coverage",
  //   options: [
  //     "A. Another name for decision coverage",
  //     "B. Another name for all-edges coverage",
  //     "C. Another name for basic path coverage",
  //     "D. All the above",
  //   ],
  //   answer: "A. Another name for decision coverage",
  // },
  // //403
  // {
  //   question:
  //     "The _________ Is the activity where general testing objectives are transformed into tangible test conditions and test designs",
  //   options: [
  //     "A. Testing Planning",
  //     "B. Test Control",
  //     "C. Test analysis and design",
  //     "D. Test implementation",
  //   ],
  //   answer: "C. Test analysis and design",
  // },
  // //404
  // {
  //   question:
  //     "Integration testing where no incremental testing takes place prior to all the system’s components being combined to form the system.",
  //   options: [
  //     "A. System testing",
  //     "B. Component Testing",
  //     "C. Incremental Testing",
  //     "D. Big bang testing",
  //   ],
  //   answer: "D. Big bang testing",
  // },
  // //405
  // {
  //   question:
  //     "A test case design technique for a component in which test cases are designed to execute statements is called as?",
  //   options: [
  //     "A. State transition Testing",
  //     "B. Static Testing",
  //     "C. Transition testing",
  //     "D. Statement testing",
  //   ],
  //   answer: "D. Statement testing",
  // },
  // //406
  // {
  //   question: "Who should have technical and Business background.",
  //   options: ["A. Moderator", "B. Author", "C. Reviewer", "D. Recorder"],
  //   answer: "C. Reviewer",
  // },
  // //407
  // {
  //   question: "A test plan defines",
  //   options: [
  //     "A. What is selected for testing",
  //     "B. Objectives and results",
  //     "C. Expected results",
  //     "D. Targets and misses",
  //   ],
  //   answer: "B. Objectives and results",
  // },
  // //408
  // {
  //   question: "Component integration testing can be done",
  //   options: [
  //     "A. Before Integration testing",
  //     "B. After unit testing",
  //     "C. After component testing",
  //     "D. After system testing",
  //   ],
  //   answer: "C. After component testing",
  // },
  // //409
  // {
  //   question: "Test basis documentation is analyzed in which phase of testing",
  //   options: [
  //     "A. Test Analysis",
  //     "B. Test Design",
  //     "C. Test Execution",
  //     "D. Test Planning",
  //   ],
  //   answer: "A. Test Analysis",
  // },
  // //410
  // {
  //   question: "Which one is not the task of test leader?",
  //   options: [
  //     "A. Coordinate the test strategy and plan with project managers and others",
  //     "B. Decide about the implementation of the test environment",
  //     "C. Write test summary reports",
  //     "D. Review and contribute to test plans",
  //   ],
  //   answer: "D. Review and contribute to test plans",
  // },
  // //411
  // {
  //   question:
  //     "if (condition1 && (condition2 function1())) \nstatement1; \nelse \nstatement2;",
  //   options: [
  //     "A. Decision coverage",
  //     "B. Condition coverage",
  //     "C. Statement coverage",
  //     "D. Path Coverage",
  //   ],
  //   answer: "B. Condition coverage",
  // },
  // //412
  // {
  //   question:
  //     "_________ reviews are often held with just the programmer who wrote the code and one or two other programmers or testers.",
  //   options: [
  //     "A. Formal Reviews",
  //     "B. Peer Reviews",
  //     "C. Semi Formal Reviews",
  //     "D. All of the above",
  //   ],
  //   answer: "B. Peer Reviews",
  // },
  // //413
  // {
  //   question:
  //     "In ________ testing test cases i.e input to the software are created based on the specifications languages.",
  //   options: [
  //     "A. State Transition Testing",
  //     "B. Random Testing",
  //     "C. Syntax Testing",
  //     "D. Penetration Testing",
  //   ],
  //   answer: "C. Syntax Testing",
  // },
  // //414
  // {
  //   question: "White Box Testing",
  //   options: [
  //     "A. Same as glass box testing",
  //     "B. Same as clear box testing",
  //     "C. Both A. and B.",
  //     "D. None of the above.",
  //   ],
  //   answer: "C. Both A. and B.",
  // },
  // //415
  // {
  //   question: "Verification activities during design stages are",
  //   options: [
  //     "A. Reviewing and Inspecting",
  //     "B. Inspecting and Testing",
  //     "C. Reviewing and Testing",
  //     "D. Reviewing, Inspecting and Testing.",
  //   ],
  //   answer: "A. Reviewing and Inspecting",
  // },
  // //416
  // {
  //   question: "Equivalence partitioning consists of various activities:",
  //   options: [
  //     "A. Ensure that test cases test each input and output equivalence class at least once",
  //     "B. Identify all inputs and all outputs",
  //     "C. Identify equivalence classes for each input",
  //     "D. All of the above",
  //   ],
  //   answer:
  //     "A. Ensure that test cases test each input and output equivalence class at least once",
  // },
  // //417
  // {
  //   question: "Static Analysis",
  //   options: [
  //     "A. Same as static testing",
  //     "B. Done by the developers",
  //     "C. Both A. and B",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Both A. and B",
  // },
  // //418
  // {
  //   question:
  //     "Size of a project is defined in terms of all the following except",
  //   options: [
  //     "A. Person days",
  //     "B. Person hours",
  //     "C. Calendar months",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Calendar months",
  // },
  // //419
  // {
  //   question:
  //     "Testing responsibilities:\nTester 1 – Verify that the program is able to display images clearly on all 10 of the monitors in the lab\nTester 2 - Make sure the program instructions are easy to use Security concerns are important for which type of applications\nTester 3 – Verify that the calculation module works correctly by using both scripts and ad hoc testing. Which term is used to refer to the testing that is performed by\nTester 3 in the above scenario?",
  //   options: [
  //     "A. Unit testing",
  //     "B. Algorithm specific testing",
  //     "C. Compatibility testing",
  //     "D. Black box testing",
  //   ],
  //   answer: "D. Black box testing",
  // },
  // //420
  // {
  //   question: "Objective of review meeting is",
  //   options: [
  //     "A. To identify problems with design",
  //     "B. To solve the problems with design",
  //     "C. Both A. and B",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Both A. and B",
  // },
  // //421
  // {
  //   question: "QC is",
  //   options: [
  //     "A. Phase building activity",
  //     "B. Intermediate activity",
  //     "C. End of Phase activity",
  //     "D. Design activity",
  //   ],
  //   answer: "C. End of Phase activity",
  // },
  // //422
  // {
  //   question:
  //     "Which tool store information about versions and builds of software and testware",
  //   options: [
  //     "A. Test Management tool",
  //     "B. Requirements management tool",
  //     "C. Configuration management tool",
  //     "D. Static analysis tool",
  //   ],
  //   answer: "C. Configuration management tool",
  // },
  // //423
  // {
  //   question: "Testing Process comprised of",
  //   options: [
  //     "A. Test Plan and Test Cases",
  //     "B. Test log and Test Status",
  //     "C. Defect Tracking",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //424
  // {
  //   question: "Preparing and automating test cases before coding is called",
  //   options: [
  //     "A. Test first approach",
  //     "B. Test-driven development",
  //     "C. Both A. & B.",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Both A. & B.",
  // },
  // //425
  // {
  //   question: "Which one is not characteristic of test management tool?",
  //   options: [
  //     "A. Support for the management of tests and the testing activities carried out",
  //     "B. Interfaces to test execution tools",
  //     "C. Quantitative analysis related to tests",
  //     "D. Check for consistency and undefined requirements",
  //     "E. None of the above",
  //   ],
  //   answer: "D. Check for consistency and undefined requirements",
  // },
  // //426
  // {
  //   question: "Code Walkthrough",
  //   options: [
  //     "A. Type of dynamic testing",
  //     "B. Type of static testing",
  //     "C. Neither dynamic nor static",
  //     "D. Performed by the testing team",
  //   ],
  //   answer: "B. Type of static testing",
  // },
  // //427
  // {
  //   question: "Risk analysis talks about",
  //   options: [
  //     "A. The data required for testing, the infrastructure requirements to manage the data as well as the methods for preparing test data, requirements, converters and sources",
  //     "B. Details what types of tests must be conducted, what stages of testing are required and outlines the sequence and timing of tests",
  //     "C. A testing goal. It is a statement of what the tester is expected to accomplish or validate during a testing activity. These guide the development of test cases and procedures",
  //     "D. None of the above",
  //   ],
  //   answer:
  //     "B. Details what types of tests must be conducted, what stages of testing are required and outlines the sequence and timing of tests",
  // },
  // //428
  // {
  //   question:
  //     "What are the 2 major components taken into consideration with risk analysis?",
  //   options: [
  //     "A. The probability the negative event will occur",
  //     "B. The potential loss or impact associated with the event",
  //     "C. Both A. and B.",
  //     "D. Neither A. nor B.",
  //   ],
  //   answer: "C. Both A. and B.",
  // },
  // //429
  // {
  //   question:
  //     "If the application is complex, but NOT data intensive and is to be tested on one configuration and 2 rounds, the easiest method to test is",
  //   options: [
  //     "A. Manual testing",
  //     "B. Automation testing",
  //     "C. Both",
  //     "D. None",
  //   ],
  //   answer: "A. Manual testing",
  // },
  // //430
  // {
  //   question: "Functional tests can be performed at all test levels",
  //   options: ["A. True", "B. False"],
  //   answer: "A. True",
  // },
  // //431
  // {
  //   question: "Structural Testing",
  //   options: [
  //     "A. Same as black box testing",
  //     "B. Same as white box testing",
  //     "C. Same as functional testing",
  //     "D. None of the above",
  //   ],
  //   answer: "B. Same as white box testing",
  // },
  // //432
  // {
  //   question:
  //     "In formal review, Rework: fixing defects found typically done by _________",
  //   options: ["A. Moderator", "B. Author", "C. Reviewer", "D. Recorder"],
  //   answer: "B. Author",
  // },
  // //433
  // {
  //   question:
  //     "The _________ may facilitate the testing of components or part of a system by simulation the environment in which the test object will run",
  //   options: [
  //     "A. Test Design tool",
  //     "B. Test data preparation tool",
  //     "C. Test execution tool",
  //     "D. Test harness",
  //     "E. None of the above",
  //   ],
  //   answer: "D. Test harness",
  // },
  // //434
  // {
  //   question: "Regression testing mainly helps in",
  //   options: [
  //     "A. Re-testing fixed defects",
  //     "B. Checking for side-effects of fixes",
  //     "C. Checking the core gaps",
  //     "D. Ensuring high level sanity",
  //   ],
  //   answer: "B. Checking for side-effects of fixes",
  // },
  // //435
  // {
  //   question: "Review is one of the methods of V&V. The other methods are",
  //   options: [
  //     "A. Inspection",
  //     "B. Walkthrough",
  //     "C. Testing",
  //     "D. All of the above",
  //   ],
  //   answer: "D. All of the above",
  // },
  // //436
  // {
  //   question: "Which review is inexpensive",
  //   options: [
  //     "A. Informal Review",
  //     "B. Walkthrough",
  //     "C. Technical review",
  //     "D. Inspection",
  //   ],
  //   answer: "A. Informal Review",
  // },
  // //437
  // {
  //   question: "Following are some of the testing risks",
  //   options: [
  //     "A. Budget, Test environment",
  //     "B. Budget, Number of qualified test resources",
  //     "C. Budget, Number of qualified test resources, Test environment",
  //     "D. None of the above",
  //   ],
  //   answer: "B. Budget, Number of qualified test resources",
  // },
  // //438
  // {
  //   question: "Random Testing",
  //   options: [
  //     "A. Program is tested randomly sampling the input.",
  //     "B. A black-box testing technique",
  //     "C. Both A. and B.",
  //     "D. None of the above.",
  //   ],
  //   answer: "A. Program is tested randomly sampling the input.",
  // },
  // //439
  // {
  //   question:
  //     "Black-box testing technique is also called as structure based technique",
  //   options: ["A. True", "B. False"],
  //   answer: "B. False",
  // },
  // //440
  // {
  //   question: "Reliability, usability, efficiency are",
  //   options: [
  //     "A. Functional characteristics",
  //     "B. Non functional characteristics",
  //     "C. Both A. & B.",
  //     "D. None of the above",
  //   ],
  //   answer: "B. Non functional characteristics",
  // },
  // //441
  // {
  //   question: "Test Plan",
  //   options: [
  //     "A. Road map for testing",
  //     "B. Tells about the actual results and expected results",
  //     "C. Both a and b",
  //     "D. None of the above",
  //   ],
  //   answer: "A. Road map for testing",
  // },
  // //442
  // {
  //   question: "User Acceptance Testing",
  //   options: [
  //     "A. Same as Alpha Testing",
  //     "B. Same as Beta Testing",
  //     "C. Combination of Alpha and Beta Testing",
  //     "D. None of the above",
  //   ],
  //   answer: "C. Combination of Alpha and Beta Testing",
  // },
  // //443
  // {
  //   question: "Path coverage includes",
  //   options: [
  //     "A. Statement coverage",
  //     "B. Condition coverage",
  //     "C. Decision coverage",
  //     "D. None of these",
  //   ],
  //   answer: "D. None of these",
  // },
  // //444
  // {
  //   question:
  //     "Which testing technique do you prefer for the following situations?\n1. Severe time pressure\n2. Inadequate specification",
  //   options: [
  //     "A. Decision testing",
  //     "B. Error guessing",
  //     "C. Statement testing",
  //     "D. Exploratory testing",
  //   ],
  //   answer: "D. Exploratory testing",
  // },
  // //445
  // {
  //   question:
  //     "Recovery testing is a system test that forces the software to fail and verifies that data recovery is properly performed. The following should be checked for correctness\n1. Re-initialization\n2. Restart\n3. Data Recovery\n4. Check Point Mechanism",
  //   options: ["A. 1 and 2", "B. 1, 2 and 3", "C. 1, 2, 3 and 4", "D. 2 and 4"],
  //   answer: "C. 1, 2, 3 and 4",
  // },
  // //446
  // {
  //   question: "Data flow analysis studies:",
  //   options: [
  //     "A. Possible communications bottlenecks in a program.",
  //     "B. The rate of change of data values as a program executes.",
  //     "C. The use of data on paths through the code.",
  //     "D. The intrinsic complexity of the code.",
  //   ],
  //   answer: "C. The use of data on paths through the code.",
  // },
  // //447
  // {
  //   question: "Which of the following is NOT a white box technique?",
  //   options: [
  //     "A. Statement testing",
  //     "B. Path testing",
  //     "C. Data flow testing",
  //     "D. State transition testing",
  //   ],
  //   answer: "D. State transition testing",
  // },
  // //448
  // {
  //   question:
  //     "Which one of the following describes the major benefit of verification early in the life cycle?",
  //   options: [
  //     "A. It allows the identification of changes in user requirements.",
  //     "B. It facilitates timely set up of the test environment.",
  //     "C. It reduces defect multiplication.",
  //     "D. It allows testers to become involved early in the project.",
  //   ],
  //   answer: "C. It reduces defect multiplication.",
  // },
  // //449
  // {
  //   question: "Which of the following is false?",
  //   options: [
  //     "A. In a system two different failures may have different severities.",
  //     "B. A system is necessarily more reliable after debugging for the removal of a fault.",
  //     "C. A fault need not affect the reliability of a system.",
  //     "D. Undetected errors may lead to faults and eventually to incorrect behavior.",
  //   ],
  //   answer:
  //     "B. A system is necessarily more reliable after debugging for the removal of a fault.",
  // },
  // //450
  // {
  //   question: "Alpha testing is:",
  //   options: [
  //     "A. Post-release testing by end user representatives at the developer’s site.",
  //     "B. The first testing that is performed.",
  //     "C. Pre-release testing by end user representatives at the developer’s site.",
  //     "D. Pre-release testing by end user representatives at their sites.",
  //   ],
  //   answer:
  //     "C. Pre-release testing by end user representatives at the developer’s site.",
  // },
  // //451
  // {
  //   question: "We split testing into distinct stages primarily because:",
  //   options: [
  //     "A. Each test stage has a different purpose.",
  //     "B. It is easier to manage testing in stages.",
  //     "C. We can run different tests in different environments.",
  //     "D. The more stages we have, the better the testing.",
  //   ],
  //   answer: "A. Each test stage has a different purpose.",
  // },
  // //452
  // {
  //   question:
  //     "Which of the following would NOT normally form part of a test plan?",
  //   options: [
  //     "A. Features to be tested",
  //     "B. Incident reports",
  //     "C. Risks",
  //     "D. Schedule",
  //   ],
  //   answer: "B. Incident reports",
  // },
  // //453
  // {
  //   question: "Which of the following is a form of functional testing?",
  //   options: [
  //     "A. Boundary value analysis",
  //     "B. Usability testing",
  //     "C. Performance testing",
  //     "D. Security testing",
  //   ],
  //   answer: "A. Boundary value analysis",
  // },
  // //454
  // {
  //   question:
  //     "Which one of the following statements about system testing is NOT true?",
  //   options: [
  //     "A. System tests are often performed by independent teams.",
  //     "B. Functional testing is used more than structural testing.",
  //     "C. Faults found during system tests can be very expensive to fix.",
  //     "D. End-users should be involved in system tests.",
  //   ],
  //   answer: "D. End-users should be involved in system tests.",
  // },
  // //455
  // {
  //   question:
  //     "Which of the following is not described in a unit test standard?",
  //   options: [
  //     "A. Syntax testing",
  //     "B. Equivalence partitioning",
  //     "C. Stress testing",
  //     "D. Modified condition/decision coverage",
  //   ],
  //   answer: "C. Stress testing",
  // },
  // //456
  // {
  //   question:
  //     "Which of the following is likely to benefit most from the use of test tools providing test capture and replay facilities?",
  //   options: [
  //     "A. Regression testing",
  //     "B. Integration testing",
  //     "C. System testing",
  //     "D. User acceptance testing",
  //   ],
  //   answer: "A. Regression testing",
  // },
  // //457
  // {
  //   question: "Which of the following is false?",
  //   options: [
  //     "A. Incidents should always be fixed.",
  //     "B. An incident occurs when expected and actual results differ.",
  //     "C. Incidents can be analysed to assist in test process improvement.",
  //     "D. An incident can be raised against documentation.",
  //   ],
  //   answer: "A. Incidents should always be fixed.",
  // },
  // //458
  // {
  //   question: "Static analysis is best described as:",
  //   options: [
  //     "A. The analysis of batch programs.",
  //     "B. The reviewing of test plans.",
  //     "C. The analysis of program code.",
  //     "D. The use of black box testing.",
  //   ],
  //   answer: "C. The analysis of program code.",
  // },
  // //459
  // {
  //   question: "Which of the following statements is NOT correct?",
  //   options: [
  //     "A. A minimal test set that achieves 100% LCSAJ coverage will also achieve 100% branch coverage.",
  //     "B. A minimal test set that achieves 100% path coverage will also achieve 100% statement coverage.",
  //     "C. A minimal test set that achieves 100% path coverage will generally detect more faults than one that achieves 100% statement coverage.",
  //     "D. A minimal test set that achieves 100% statement coverage will generally detect more faults than one that achieves 100% branch coverage.",
  //   ],
  //   answer:
  //     "D. A minimal test set that achieves 100% statement coverage will generally detect more faults than one that achieves 100% branch coverage.",
  // },
  // //460
  // {
  //   question: "Which of the following statements about reviews is true?",
  //   options: [
  //     "A. Reviews cannot be performed on user requirements specifications.",
  //     "B. Reviews are the least effective way of testing code.",
  //     "C. Reviews are unlikely to find faults in test plans.",
  //     "D. Reviews should be performed on specifications, code, and test plans.",
  //   ],
  //   answer:
  //     "D. Reviews should be performed on specifications, code, and test plans.",
  // },
  // //461
  // {
  //   question:
  //     "What is the main difference between a walkthrough and an inspection?",
  //   options: [
  //     "A. An inspection is lead by the author, whilst a walkthrough is lead by a trained moderator.",
  //     "B. An inspection has a trained leader, whilst a walkthrough has no leader.",
  //     "C. Authors are not present during inspections, whilst they are during walkthroughs.",
  //     "D. A walkthrough is lead by the author, whilst an inspection is lead by a trained moderator.",
  //   ],
  //   answer:
  //     "D. A walkthrough is lead by the author, whilst an inspection is lead by a trained moderator.",
  // },
  // //462
  // {
  //   question:
  //     "Which of these activities provides the biggest potential cost saving from the use of CAST?",
  //   options: [
  //     "A. Test management",
  //     "B. Test design",
  //     "C. Test execution",
  //     "D. Test planning",
  //   ],
  //   answer: "C. Test execution",
  // },
  // //463
  // {
  //   question: "Which of the following is NOT true of incidents?",
  //   options: [
  //     "A. Incident resolution is the responsibility of the author of the software under test.",
  //     "B. Incidents may be raised against user requirements.",
  //     "C. Incidents require investigation and/or correction.",
  //     "D. Incidents are raised when expected and actual results differ.",
  //   ],
  //   answer:
  //     "A. Incident resolution is the responsibility of the author of the software under test.",
  // },
  // //464
  // {
  //   question: "Which of the following characterizes the cost of faults?",
  //   options: [
  //     "A. They are cheapest to find in the early development phases and the most expensive to fix in the latest test phases.",
  //     "B. They are easiest to find during system testing but the most expensive to fix then.",
  //     "C. Faults are cheapest to find in the early development phases but the most expensive to fix then.",
  //     "D. Although faults are most expensive to find during early development phases, they are cheapest to fix then.",
  //   ],
  //   answer:
  //     "B. They are easiest to find during system testing but the most expensive to fix then.",
  // },
  // //465
  // {
  //   question:
  //     "Which one of the following statements, about capture-replay tools, is NOT correct?",
  //   options: [
  //     "A. They are used to support multi-user testing.",
  //     "B. They are used to capture and animate user requirements.",
  //     "C. They are the most frequently purchased types of CAST tool.",
  //     "D. They capture aspects of user behaviour.",
  //   ],
  //   answer: "D. They capture aspects of user behaviour.",
  // },
  // //466
  // {
  //   question: "Which of the following is true of the V-model?",
  //   options: [
  //     "A. It states that modules are tested against user requirements.",
  //     "B. It only models the testing phase.",
  //     "C. It specifies the test techniques to be used.",
  //     "D. It includes the verification of designs.",
  //   ],
  //   answer: "D. It includes the verification of designs.",
  // },
  // //467
  // {
  //   question: "Error guessing:",
  //   options: [
  //     "A. Supplements formal test design techniques.",
  //     "B. Can only be used in component, integration and system testing.",
  //     "C. Is only performed in user acceptance testing.",
  //     "D. Is not repeatable and should not be used.",
  //   ],
  //   answer: "A. Supplements formal test design techniques.",
  // },
  // //468
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid:\nAn employee has £4000 of salary tax-free. The next £1500 is taxed at 10%\nThe next £28000 is taxed at 22%\nAny further amount is taxed at 40%\nWhich of these groups of numbers would fall into the same equivalence class?",
  //   options: [
  //     "A. £4800; £14000; £28000",
  //     "B. £5200; £5500; £28000",
  //     "C. £28001; £32000; £35000",
  //     "D. £5800; £28000; £32000",
  //   ],
  //   answer: "D. £5800; £28000; £32000",
  // },
  // //469
  // {
  //   question: "The oracle assumption:",
  //   options: [
  //     "A. Is that there is some existing system against which test output may be checked.",
  //     "B. Is that the tester can routinely identify the correct outcome of a test.",
  //     "C. Is that the tester knows everything about the software under test.",
  //     "D. Is that the tests are reviewed by experienced testers.",
  //   ],
  //   answer:
  //     "B. Is that the tester can routinely identify the correct outcome of a test.",
  // },
  // //470
  // {
  //   question:
  //     "In prioritising what to test, the most important objective is to:",
  //   options: [
  //     "A. Find as many faults as possible.",
  //     "B. Test high-risk areas.",
  //     "C. Obtain good test coverage.",
  //     "D. Test whatever is easiest to test.",
  //   ],
  //   answer: "B. Test high-risk areas.",
  // },
  // //471
  // {
  //   question: "The most important thing about early test design is that it:",
  //   options: [
  //     "A. Makes test preparation easier.",
  //     "B. Means inspections are not required.",
  //     "C. Can prevent fault multiplication.",
  //     "D. Will find all faults.",
  //   ],
  //   answer: "C. Can prevent fault multiplication.",
  // },
  // //472
  // {
  //   question: "A configuration management system would NOT normally provide:",
  //   options: [
  //     "A. Linkage of customer requirements to version numbers.",
  //     "B. Facilities to compare test results with expected results.",
  //     "C. The precise differences in versions of software component source code.",
  //     "D. Restricted access to the source code library.",
  //   ],
  //   answer: "B. Facilities to compare test results with expected results.",
  // },
  // //473
  // {
  //   question: "Integration testing in the small:",
  //   options: [
  //     "A. Tests the individual components that have been developed.",
  //     "B. Tests interactions between modules or subsystems.",
  //     "C. Only uses components that form part of the live system.",
  //     "D. Tests interfaces to other systems.",
  //   ],
  //   answer: "B. Tests interactions between modules or subsystems.",
  // },
  // //474
  // {
  //   question: "Which of the following requirements is testable?",
  //   options: [
  //     "A. The system shall be user friendly.",
  //     "B. The safety-critical parts of the system shall contain 0 faults.",
  //     "C. The response time shall be less than one second for the specified design load.",
  //     "D. The system shall be built to be portable.",
  //   ],
  //   answer:
  //     "C. The response time shall be less than one second for the specified design load.",
  // },
  // //475
  // {
  //   question: "An important benefit of code inspections is that they:",
  //   options: [
  //     "A. Enable the code to be tested before the execution environment is ready.",
  //     "B. Can be performed by the person who wrote the code.",
  //     "C. Can be performed by inexperienced staff.",
  //     "D. Are cheap to perform.",
  //   ],
  //   answer:
  //     "A. Enable the code to be tested before the execution environment is ready.",
  // },
  // //476
  // {
  //   question: "Test cases are designed during:",
  //   options: [
  //     "A. Test recording.",
  //     "B. Test planning.",
  //     "C. Test configuration.",
  //     "D. Test specification.",
  //   ],
  //   answer: "D. Test specification.",
  // },
  // //477
  // {
  //   question: "A failure is:",
  //   options: [
  //     "A. Found in the software; the result of an error.",
  //     "B. Departure from specified behaviour.",
  //     "C. An incorrect step, process or data definition in a computer program.",
  //     "D. A human action that produces an incorrect result.",
  //   ],
  //   answer: "B. Departure from specified behaviour.",
  // },
  // //478
  // {
  //   question:
  //     "How would you estimate the amount of re-testing likely to be required?",
  //   options: [
  //     "A. Metrics from previous similar projects",
  //     "B. Discussions with the development team",
  //     "C. Time allocated for regression testing",
  //     "D. A. & B.",
  //   ],
  //   answer: "D. A. & B.",
  // },
  // //479
  // {
  //   question:
  //     "Given the following sets of test management terms (v-z), and activity descriptions (1-5), which one of the following best pairs the two sets?\nv - Test control\nw - Test monitoring\nx - Test estimation\ny - Incident management\nz - Configuration control\n1 - Calculation of required test resources\n2 - Maintenance of record of test results\n3 - Re-allocation of resources when tests overrun\n4 - Report on deviation from test plan\n5 - Tracking of anomalous test results",
  //   options: [
  //     "A. v-3,w-2,x-1,y-5,z-4",
  //     "B. v-2,w-5,x-1,y-4,z-3",
  //     "C. v-3,w-4,x-1,y-5,z-2",
  //     "D. v-2,w-1,x-4,y-3,z-5",
  //   ],
  //   answer: "C. v-3,w-4,x-1,y-5,z-2",
  // },
  // //480
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid:\nAn employee has £4000 of salary tax free. The next £1500 is taxed at 10% The next £28000 is taxed at 22%\nAny further amount is taxed at 40%\nTo the nearest whole pound, which of these is a valid Boundary Value Analysis test case?",
  //   options: ["A. £1500", "B. £32001", "C. £33501", "D. £28000"],
  //   answer: "C. £33501",
  // },
  // //481
  // {
  //   question: "Which of the following is NOT true of test coverage criteria?",
  //   options: [
  //     "A. Test coverage criteria can be measured in terms of items exercised by a test suite.",
  //     "B. A measure of test coverage criteria is the percentage of user requirements covered.",
  //     "C. A measure of test coverage criteria is the percentage of faults found.",
  //     "D. Test coverage criteria are often used when specifying test completion criteria.",
  //   ],
  //   answer:
  //     "C. A measure of test coverage criteria is the percentage of faults found.",
  // },
  // //482
  // {
  //   question:
  //     'Analyze the following highly simplified procedure:\nAsk: "What type of ticket do you require, single or return?"\nIF the customer wants ‘return’\nAsk: "What rate, Standard or Cheap-day?"\nIF the customer replies ‘Cheap-day’\nSay: "That will be £11:20"\nELSE\nSay: "That will be £19:50"\nENDIF\nELSE\nSay: "That will be £9:75"\nENDIF\nNow decide the minimum number of tests that are needed to ensure that all the questions have been asked, all combinations have occurred and all replies given.',
  //   options: ["A. 3", "B. 4", "C. 5", "D. 6"],
  //   answer: "A. 3",
  // },
  // //483
  // {
  //   question:
  //     "Which of the following should NOT normally be an objective for a test?",
  //   options: [
  //     "A. To find faults in the software.",
  //     "B. To assess whether the software is ready for release.",
  //     "C. To demonstrate that the software doesn’t work.",
  //     "D. To prove that the software is correct.",
  //   ],
  //   answer: "D. To prove that the software is correct.",
  // },
  // //484
  // {
  //   question: "Enough testing has been performed when:",
  //   options: [
  //     "A. Time runs out.",
  //     "B. The required level of confidence has been achieved.",
  //     "C. No more faults are found.",
  //     "D. The users won’t find any serious faults.",
  //   ],
  //   answer: "B. The required level of confidence has been achieved.",
  // },
  // //485
  // {
  //   question:
  //     "Which of the following is the best source of Expected Outcomes for User Acceptance Test scripts?",
  //   options: [
  //     "A. Actual results",
  //     "B. Program specification",
  //     "C. User requirements",
  //     "D. System specification",
  //   ],
  //   answer: "C. User requirements",
  // },
  // //486
  // {
  //   question:
  //     "Which of the following are disadvantages of capturing tests by recording the actions of a manual tester?\ni. The script may be unstable when unexpected events occur.\nii. Data for a number of similar tests is automatically stored separately from the script.\niii. Expected results must be added to the captured script.\niv. The captured script documents the exact inputs entered by the tester.\nv. When replaying a captured test, the tester may need to debug the script if it doesn’t play correctly.",
  //   options: [
  //     "A. i, iii, iv, v.",
  //     "B. ii, iv and v.",
  //     "C. i, ii and iv.",
  //     "D. i and v.",
  //   ],
  //   answer: "A. i, iii, iv, v.",
  // },
  // //487
  // {
  //   question:
  //     "Which of the following is a characteristic of good testing in any life cycle model?",
  //   options: [
  //     "A. All document reviews involve the development team.",
  //     "B. Some, but not all, development activities have corresponding test activities.",
  //     "C. Each test level has test objectives specific to that level.",
  //     "D. Analysis and design of tests begins as soon as development is complete.",
  //   ],
  //   answer: "C. Each test level has test objectives specific to that level.",
  // },
  // //488
  // {
  //   question:
  //     "The process of designing test cases consists of the following activities:\ni. Elaborate and describe test cases in detail by using test design techniques.\nii. Specify the order of test case execution.\niii. Analyse requirements and specifications to determine test conditions.\niv. Specify expected results.\nAccording to the process of identifying and designing tests, what is the correct order of these activities?",
  //   options: [
  //     "A. iii, i, iv, ii.",
  //     "B. iii, iv, i, ii.",
  //     "C. iii, ii, i, iv.",
  //     "D. ii, iii, i, iv.",
  //   ],
  //   answer: "A. iii, i, iv, ii.",
  // },
  // //489
  // {
  //   question:
  //     "Which is the MOST important advantage of independence in testing?",
  //   options: [
  //     "A. An independent tester may find defects more quickly than the person who wrote the software.",
  //     "B. An independent tester may be more focused on showing how the software works than the person who wrote the software.",
  //     "C. An independent tester may be more effective and efficient because they are less familiar with the software than the person who wrote it.",
  //     "D. An independent tester may be more effective at finding defects missed by the person who wrote the software.",
  //   ],
  //   answer:
  //     "D. An independent tester may be more effective at finding defects missed by the person who wrote the software.",
  // },
  // //490
  // {
  //   question:
  //     "Given the following specification, which of the following values for age are in the SAME equivalence partition?\nIf you are less than 18, you are too young to be insured. Between 18 and 30 inclusive, you will receive a 20% discount. Anyone over 30 is not eligible for a discount.",
  //   options: [
  //     "A. 17, 18, 19.",
  //     "B. 29, 30, 31.",
  //     "C. 18, 29, 30.",
  //     "D. 17, 29, 31.",
  //   ],
  //   answer: "C. 18, 29, 30.",
  // },
  // //491
  // {
  //   question:
  //     "Consider the following statements:\ni.100% statement coverage guarantees 100% branch coverage.\nii.100% branch coverage guarantees 100% statement coverage.\niii.100% branch coverage guarantees 100% decision coverage.\niv.100% decision coverage guarantees 100% branch coverage.\nv.100% statement coverage guarantees 100% decision coverage.",
  //   options: [
  //     "A. ii is True; i, iii, iv & v are False",
  //     "B. i & v are True; ii, iii & iv are False",
  //     "C. ii & iii are True; i, iv & v are False",
  //     "D. ii, iii & iv are True; i & v are False",
  //   ],
  //   answer: "D. ii, iii & iv are True; i & v are False",
  // },
  // //492
  // {
  //   question:
  //     "What is the difference between a project risk and a product risk?",
  //   options: [
  //     "A. Project risks are potential failure areas in the software or system; product risks are risks that surround the project’s capability to deliver its objectives.",
  //     "B. Project risks are the risks that surround the project’s capability to deliver its objectives; product risks are potential failure areas in the software or system.",
  //     "C. Project risks are typically related to supplier issues, organizational factors and technical issues; product risks are typically related to skill and staff shortages.",
  //     "D. Project risks are risks that delivered software will not work; product risks are typically related to supplier issues, organizational factors and technical issues.",
  //   ],
  //   answer:
  //     "B. Project risks are the risks that surround the project’s capability to deliver its objectives; product risks are potential failure areas in the software or system.",
  // },
  // //493
  // {
  //   question:
  //     "During which fundamental test process activity do we determine if MORE tests are needed?",
  //   options: [
  //     "A Test implementation and execution.",
  //     "B. Evaluating test exit criteria.",
  //     "C. Test analysis and design.",
  //     "D. Test planning and control.",
  //   ],
  //   answer: "B. Evaluating test exit criteria.",
  // },
  // //494
  // {
  //   question: "What is the MAIN purpose of a Master Test Plan?",
  //   options: [
  //     "A. To communicate how incidents will be managed.",
  //     "B. To communicate how testing will be performed.",
  //     "C. To produce a test schedule.",
  //     "D. To produce a work breakdown structure.",
  //   ],
  //   answer: "B. To communicate how testing will be performed.",
  // },
  // //495
  // {
  //   question:
  //     "Which of the following defines the sequence in which tests should be executed?",
  //   options: [
  //     "A. Test plan.",
  //     "B. Test procedure specification.",
  //     "C. Test case specification.",
  //     "D. Test design specification.",
  //   ],
  //   answer: "B. Test procedure specification.",
  // },
  // //496
  // {
  //   question: "Which of the following is a major task of test planning?",
  //   options: [
  //     "A. Determining the test approach.",
  //     "B. Preparing test specifications.",
  //     "C. Evaluating exit criteria and reporting.",
  //     "D. Measuring and analyzing results.",
  //   ],
  //   answer: "A. Determining the test approach.",
  // },
  // //497
  // {
  //   question: "What is the main purpose of impact analysis for testers?",
  //   options: [
  //     "A. To determine the programming effort needed to make the changes.",
  //     "B. To determine what proportion of the changes need to be tested.",
  //     "C. To determine how much the planned changes will affect users.",
  //     "D. To determine how the existing system may be affected by changes.",
  //   ],
  //   answer:
  //     "D. To determine how the existing system may be affected by changes.",
  // },
  // //498
  // {
  //   question:
  //     "In a system designed to work out the tax to be paid:\nAn employee has £4000 of salary tax free.\nThe next £1500 is taxed at 10%.\nThe next £28000 after that is taxed at 22%.\nAny further amount is taxed at 40%.\nTo the nearest whole pound, which of these is a valid Boundary Value Analysis test case?",
  //   options: ["A. £28000.", "B. £33501.", "C. £32001.", "D. £1500."],
  //   answer: "B. £33501.",
  // },
  // //499
  // {
  //   question:
  //     "Which of the following tools is most likely to contain a comparator?",
  //   options: [
  //     "A. Dynamic Analysis tool.",
  //     "B. Test Execution tool.",
  //     "C. Static Analysis tool.",
  //     "D. Security tool.",
  //   ],
  //   answer: "B. Test Execution tool.",
  // }, //500
  // {
  //   question:
  //     "When software reliability measures are used to determine when to stop testing, the best types of test cases to use are those that",
  //   options: [
  //     "A. Exercise system functions in proportion to the frequency they will be used in the released product",
  //     "B. Push the system beyond its designed operation limits and are likely to make the system fail",
  //     "C. Exercise unusual and obscure scenarios that may not have been considered in design",
  //     "D. Exercise the most complicated and the most error-prone portions of the system",
  //   ],
  //   answer:
  //     "A. Exercise system functions in proportion to the frequency they will be used in the released product",
  // },

  // //?
  // {
  //   question: 'a',
  //   options: ['a', '', '', ''],
  //   answer: 'a',
  // },
];

function App() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(randomizeQuestion());
  // eslint-disable-next-line no-unused-vars
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [message, setMessage] = useState("");

  function randomizeQuestion() {
    // Lọc những câu hỏi chưa được trả lời đúng
    const unansweredQuestions = questions.filter(
      (q) => !answeredQuestions.includes(q.question)
    );
    if (unansweredQuestions.length === 0) return null; // Nếu tất cả câu hỏi đã trả lời đúng, không còn câu hỏi để hỏi
    const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
    const question = unansweredQuestions[randomIndex];
    const shuffledOptions = shuffleArray(question.options);
    return { ...question, options: shuffledOptions };
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleAnswer(selectedOption) {
    setUserAnswer(selectedOption);
    if (selectedOption === currentQuestion.answer) {
      setIsCorrect(true);
      setMessage("Đúng rồi!");
      // Thêm câu hỏi đã trả lời đúng vào danh sách
      setAnsweredQuestions([...answeredQuestions, currentQuestion.question]);
    } else {
      setIsCorrect(false);
      setMessage(
        `Sai rồi! Câu trả lời chính xác là: ${currentQuestion.answer}`
      );
    }
  }

  function nextQuestion() {
    const nextQ = randomizeQuestion();
    if (nextQ) {
      setCurrentQuestion(nextQ);
      setUserAnswer("");
      setIsCorrect(null);
      setMessage("");
    } else {
      setMessage("Bạn đã hoàn thành tất cả các câu hỏi!");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      {currentQuestion ? (
        <div>
          <p style={{ whiteSpace: "pre-wrap" }}>{currentQuestion.question}</p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <div key={index} style={{ marginTop: "5px" }}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </div>
            ))}
          </div>
          <div>
            {isCorrect !== null && (
              <p style={{ color: isCorrect ? "green" : "red" }}>{message}</p>
            )}
          </div>
          <button onClick={nextQuestion} style={{ marginTop: "20px" }}>
            Câu hỏi tiếp theo
          </button>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;
