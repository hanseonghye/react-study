import React, { useCallback, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Form from 'components/atoms/Form'
import Input from 'components/atoms/Input'
import List from 'components/molecules/List'
import Span from 'components/molecules/Span'
import Button from 'components/molecules/Button'
import ListItem from "../molecules/ListItem";
import ButtonList from "../molecules/ButtonList";

import {loadTodosRequest, changeToInput} from 'components/modules/todo'


interface TodoContentProps {
}

interface UpdateInputValue {
    [id: string]: string;
}

const StyledTodoContent = styled.div`
	min-width: 730px;
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		border: none;
	}
	input[name='todo-create-input'] {
		border-bottom: 0.3px solid lightgray;
	}
	.todo-list-item {
		flex-wrap: wrap;
		max-width: 730px;
	}
	.todo-form {
		width: 100%;
	}
	.todo-description {
		padding: 0.9em 1.57em;
		width: 76%;
		box-sizing: border-box;
	}
	.todo-description.todo-update-input {
		width: 100%;
	}
	.todo-buttons {
		width: 24%;
		box-sizing: border-box;
	}
	@media (max-width: 750px) {
		min-width: 100%;
		.todo-list-item {
			height: auto;
		}
		.todo-description {
			width: 100%;
		}
		.todo-buttons {
			width: 100%;
			margin-right: 0;
			border-top: 0.5px solid lightgray;
			*:first-child {
				border-right: 0.5px solid lightgray;
			}
		}
	}
`;


const TodoContent = () => {
    const { todos, loading } = useSelector((state: RootState) => state.todo)
    const { userInfo } = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const [insertInputValue, setInsertInputValue] = useState('')
    const [updateInputValues, setUpdateInputValues] = useState<UpdateInputValue>({})

    const onSubmitForm = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            dispatch(insertTodoRequest(insertInputValue))
            setInsertInputValue('')
        },
        [insertInputValue]
    )

    const onDeleteItem = useCallback((id: string) => () => dispatch(deleteTodoRequest(id)), [])
    const onChangeToInput = useCallback(
        (id: string, text: string) => () => {
            dispatch(changeToInput(id))
            setUpdateInputValues({...updateInputValues, [id] : text})
        },
        [updateInputValues]
    )
    const onChangeInput = useCallback(
        (id: string, text:string) => () => {
            dispatch(changeToInput(id))
            setUpdateInputValues({ ...updateInputValues, [id] : text})
        }
    )


    const todoItems = useMemo(
        () =>
            todos && todos.map(v => (
                <ListItem key={v.id} hr className='todo-list-item'>
                    {v.writeMode ? (
                        <input className='todo-description todo-update-input'
                                onChange={onChangeInput(v.id)}
                               value={updateInputValues[v.id]}
                               size='big'
                        />
                    ) : (
                        <>
                            <Span className='todo-description' del={v.done}>
                                {v.description}
                            </Span>

                            <ButtonList className='todo-buttons'>
                                <Button color='blue'>수정</Button>
                                <Button color='blue'>삭제</Button>
                            </ButtonList>
                        </>
                    )}
                </ListItem>
            )),
        [todos, updateInputValues]
    )


    useEffect(() => {
        if(! todos) {
            dispatch(loadTodosRequest())
        }
    },[userInfo.email])


    return (
        <StyledTodoContent>
            {!userInfo && <Redirect to ="/login" />}
            <Form className="todo-form" onSubmit={onSubmitForm}>
                <Input placeholder='무엇을 해야 하나요?'
                       name="todo-create-input"
                       value={insertInputValue}
                       setValue={setInsertInputValue}
                />
            </Form>
            {userInfo && (loading ? <Span size='title'>Loading...</Span> : null)}
            <List white listHeight='66px'>
                {todoItems}
            </List>
        </StyledTodoContent>
    )
}