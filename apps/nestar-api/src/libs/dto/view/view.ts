import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose'; // Keep ObjectId if needed
import { ViewGroup } from '../../enums/view.enum';

// @ObjectType() Decorator => DTO
@ObjectType()
export class View {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => ViewGroup)
	viewGroup: ViewGroup;

	@Field(() => String)
	viewRefId: ObjectId; // Id => MEMBER, ARTICLE, PROPERTY

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}
