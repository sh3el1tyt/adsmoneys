import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Link, SimpleCell } from '@vkontakte/vkui';
import { Icon28Messages, Icon24VideoOutline, Icon28ChainOutline, Icon28GiftCircleFillRed } from '@vkontakte/icons';

import './Home.css'

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
		<PanelHeader> 
			ADS Money
		</PanelHeader >


		<Group header={<Header mode="secondary">Просмотр рекламы</Header>}>
			<Div>


				<Div style={{ paddingTop:10, paddingBottom:0, paddingLeft:0, paddingRight:0 }} onClick={go} data-to="ads">
				<div class="videoButton" id='videobonus'>
				    <div class="title">
				        Реклама
				    </div>
				        <div class="icon">
				            <Icon24VideoOutline width={35} height={35}/>
				        </div>
			    	</div>
				</Div>

				<Link 
				hasActiv={false} 
				hasHover={false} 
				href="https://vk.me/join/xj1xTsZNxxHgiDNNj0h3yLnvcTJ8q5J_/Xs=" 
				target="_blank">
					<SimpleCell disabled style={{ marginBottom:10, backgroundColor:'#1F2936', borderRadius:2, color:'#1ABC9C' }} 
					expandable before={<Icon28Messages fill="#1ABC9C" style={{ paddingRight:15 }} />}>
						Чат игроков
					</SimpleCell>
				</Link>

				<Link 
				hasActiv={false} 
				hasHover={false} 
				href="https://vk.com/public208861316" 
				target="_blank">
					<SimpleCell disabled style={{ marginBottom:10, backgroundColor:'#1F2936', borderRadius:2, color:'#1ABC9C' }} 
					expandable before={<Icon28ChainOutline fill="#1ABC9C" style={{ paddingRight:15 }} />}>
						Наша группа
					</SimpleCell>
				</Link>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
