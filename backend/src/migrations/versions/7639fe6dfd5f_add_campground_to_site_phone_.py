"""Add Campground to site/phone relationship

Revision ID: 7639fe6dfd5f
Revises: 2580ce5968aa
Create Date: 2020-09-24 19:16:55.019724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7639fe6dfd5f'
down_revision = '2580ce5968aa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Phone',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('number', sa.String(length=120), nullable=False),
    sa.Column('num_type', sa.String(), nullable=False),
    sa.Column('campground_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['campground_id'], ['Campground.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('Campground', 'description',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.drop_column('Campground', 'num_sites')
    op.alter_column('Site', 'name',
               existing_type=sa.VARCHAR(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('Site', 'name',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.add_column('Campground', sa.Column('num_sites', sa.INTEGER(), autoincrement=False, nullable=True))
    op.alter_column('Campground', 'description',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.drop_table('Phone')
    # ### end Alembic commands ###