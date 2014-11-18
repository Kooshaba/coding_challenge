require 'rspec'
require_relative '../pivot.rb'

describe '#find_pivot' do
	it 'should work with standard input' do
		expect(find_pivot([1, 4, 6, 3, 2])).to eq 2
	end

	it 'should return -1 on empty array' do
		expect(find_pivot([])).to eq -1
	end

	it 'should return -1 with array on no pivot' do
		expect(find_pivot([1, 2, 3, 4, 5])).to eq -1
	end
end