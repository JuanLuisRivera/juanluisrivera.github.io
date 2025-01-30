---
lenguaje: Go
---
func twoSum(nums []int, target int) []int {
	result := []int{}
	i := 0
	for i < len(nums)-1 {
		if nums[i]+nums[i+1] == target {
			result = append(result, i, i+1)
		}
		i++
	}
	return result
}