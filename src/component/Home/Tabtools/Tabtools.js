import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const Tabtools = () => {
  return (
    <div className="py-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <button>Tab 1</button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p className="bg-denger">
                  Tired with all these, for restful death I cry, As to behold
                  desert a beggar born, And needy nothing trimm'd in jollity,
                  And purest faith unhappily forsworn, And gilded honour
                  shamefully misplac'd, And maiden virtue rudely strumpeted, And
                  right perfection wrongfully disgrac'd, And strength by limping
                  sway disabled And art made tongue-tied by authority, And
                  folly--doctor-like--controlling skill,
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Thy gift, thy tables, are within my brain Full character'd with
                lasting memory, Which shall above that idle rank remain, Beyond
                all date; even to eternity: Or, at the least, so long as brain
                and heart Have faculty by nature to subsist; Till each to raz'd
                oblivion yield his part Of thee, thy record never can be miss'd.
                That poor retention could not so much hold, Nor need I tallies
                thy dear love to score;
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Tabtools;
