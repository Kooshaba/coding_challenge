def find_pivot array
	return -1 if array.empty?

	right_side = array.reduce :+
	left_side = -array[-1]

	array.each_index do |i|
		right_side -= array[i]
		left_side += array[i - 1]

		return i if right_side == left_side
	end

	return -1
end